import { useRef, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Paper, Grid, Button } from "@material-ui/core";

import Link from "next/link";
import Layout from "../components/_Layout";
import axios from "axios";
import CanvasDraw from "react-canvas-draw";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  container: {},
}));

const CANVAS_WIDTH = 392;
const CANVAS_HEIGHT = 392;
const CSV_WIDTH = 28;
const CSV_HEIGHT = 28;

export default function DigitRecognizer() {
  const classes = useStyles();
  const canvasRef = useRef(null);
  const [digit, setDigit] = useState(null);
  const [image, setImage] = useState(null);

  const shapeArray = (array, width) => {
    let matrix = [];
    const rows = array.length / width;
    for (let row = 0; row < rows; row++) {
      matrix.push(array.slice(row * width, row * width + width));
    }
    return matrix;
  };

  const CSVConverter = (imageData) => {
    const blockWidth = CANVAS_WIDTH / CSV_WIDTH;
    const blockHeight = CANVAS_HEIGHT / CSV_HEIGHT;

    const bitArray = Array.from(imageData.data);
    let bitMatrix = shapeArray(bitArray, 4 * CANVAS_WIDTH);

    bitMatrix = bitMatrix
      .map((row) => {
        const grayscaleArray = [];
        const bits = row.length / 4;
        for (let bit = 0; bit < bits; bit++) {
          grayscaleArray[bit] =
            (1 / 3) *
            (row[bit * 4] + row[bit * 4 + 1] + row[bit * 4 + 2]) *
            (row[bit * 4 + 3] / 255);
        }
        return grayscaleArray;
      })
      .map((row) => {
        const csvArray = [];
        for (let index = 0; index < CSV_WIDTH; index++) {
          csvArray[index] =
            (1 / blockWidth) *
            row
              .slice(index * blockWidth, (index + 1) * blockWidth)
              .reduce((a, b) => a + b);
        }
        return csvArray;
      });

    const csvMatrix = [];
    for (let index = 0; index < CSV_HEIGHT; index++) {
      const csvArray = [];
      for (let bit = 0; bit < CSV_WIDTH; bit++) {
        csvArray[bit] = 0;
        for (
          let row = index * blockHeight;
          row < (index + 1) * blockHeight;
          row++
        ) {
          csvArray[bit] += bitMatrix[row][bit];
        }
        csvArray[bit] *= 1 / blockHeight;
      }
      csvMatrix.push(csvArray);
    }
    console.log(csvMatrix.flat());
    return csvMatrix.flat();
  };

  const handleChange = () => {
    const imageData = canvasRef.current.ctx.drawing.getImageData(
      0,
      0,
      canvasRef.current.canvas.drawing.width,
      canvasRef.current.canvas.drawing.height
    );
    const image = CSVConverter(imageData);
    axios
      .get("/api/recognize-digit", {
        params: {
          image,
        },
      })
      .then((res) => {
        setDigit(res?.prediction);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Layout>
      <Container>
        <div>
          Digit recognizer
          <CanvasDraw
            ref={canvasRef}
            onChange={handleChange}
            canvasWidth={CANVAS_WIDTH}
            canvasHeight={CANVAS_HEIGHT}
          />
          <Button onClick={() => canvasRef.current.undo()}>Undo</Button>
          <Button onClick={() => canvasRef.current.clear()}>Clear</Button>
        </div>
        <img src={image} />
        <br />
        <br />
        <br />
        <div>
          <Link href="/projects">
            <a>Return to Projects</a>
          </Link>
        </div>
        <div>
          <Link href="/">
            <a>Return Home</a>
          </Link>
        </div>
      </Container>
    </Layout>
  );
}

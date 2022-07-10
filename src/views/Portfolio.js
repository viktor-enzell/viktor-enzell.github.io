import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../img/logo.png";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { headerHeight, footerHeight, slimWidth, topMargin } from "./Home";

const useStyles = makeStyles({
  root: {
    marginTop: topMargin,
    height: "100%",
    width: "100%",
    minHeight: `calc(100vh - ${headerHeight}px - ${footerHeight}px - ${topMargin}px)`,
  },
  portfolioGrid: {
    maxWidth: slimWidth,
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  img: {
    height: 140,
  },
});

export default function Portfolio() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.portfolioGrid}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h1" component="h2">
                🗣
              </Typography>
              <Typography gutterBottom variant="h3" component="h2">
                Swedish Speech-to-text
              </Typography>
              <Typography gutterBottom color="textSecondary">
                AI, Python
              </Typography>
              <Typography>
                Description description description description description
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                href="https://huggingface.co/viktor-enzell/wav2vec2-large-voxrex-swedish-4gram"
                target="_blank"
              >
                Model repo
              </Button>
              <Button
                size="small"
                href="https://huggingface.co/spaces/viktor-enzell/wav2vec2-large-voxrex-swedish-4gram"
                target="_blank"
              >
                Model demo
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h1" component="h2">
                ☝️
              </Typography>
              <Typography gutterBottom variant="h3" component="h2">
                Sign Language Teacher
              </Typography>
              <Typography gutterBottom color="textSecondary">
                Tag
              </Typography>
              <Typography>
                Description description description description description
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                href="https://github.com/viktor-enzell/sign-language-teacher"
                target="_blank"
              >
                Github repo
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h1" component="h2">
                📰
              </Typography>
              <Typography gutterBottom variant="h3" component="h2">
                News Recommender
              </Typography>
              <Typography gutterBottom color="textSecondary">
                Tag
              </Typography>
              <Typography>
                Description description description description description
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h1" component="h2">
                💬
              </Typography>
              <Typography gutterBottom variant="h3" component="h2">
                Tweet Analyzer
              </Typography>
              <Typography gutterBottom color="textSecondary">
                Tag
              </Typography>
              <Typography>
                Description description description description description
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h1" component="h2">
                🤖
              </Typography>
              <Typography gutterBottom variant="h3" component="h2">
                Dataless Text Classification with BERT
              </Typography>
              <Typography gutterBottom color="textSecondary">
                Tag
              </Typography>
              <Typography>
                Description description description description description
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h1" component="h2">
                📝
              </Typography>
              <Typography gutterBottom variant="h3" component="h2">
                Collaborative Real-time Notes App
              </Typography>
              <Typography gutterBottom color="textSecondary">
                Tag
              </Typography>
              <Typography>
                Description description description description description
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h1" component="h2">
                📍
              </Typography>
              <Typography gutterBottom variant="h3" component="h2">
                Visit List
              </Typography>
              <Typography gutterBottom color="textSecondary">
                Java, React
              </Typography>
              <Typography>
                Description description description description description
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

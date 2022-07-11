import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { headerHeight, footerHeight, topMargin } from "./Home";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    marginTop: topMargin,
    height: "100%",
    width: "100%",
    minHeight: `calc(100vh - ${headerHeight}px - ${footerHeight}px - ${topMargin}px)`,
  },
  portfolioGrid: {
    marginTop: "0px",
    marginLeft: "-24px",
  },
  textParagraph: {
    marginBottom: "24px",
  },
  card: {
    borderStyle: "solid",
    borderColor: "#e0e0e0",
    borderWidth: "1px",
    boxShadow: "none",
  },
});

export default function Portfolio() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1" gutterBottom>
        Portfolio
      </Typography>
      <Typography className={classes.textParagraph}>
        This is a selection of projects I have worked on.
      </Typography>

      <Divider />

      <Grid container spacing={3} className={classes.portfolioGrid}>
        <Grid item xs={12} sm={6}>
          <Card className={classes.card}>
            <CardContent>
              <Typography gutterBottom variant="body2">
                <span role="img">🗣</span>
              </Typography>
              <Typography gutterBottom variant="h3" component="h2">
                Swedish Speech-to-text
              </Typography>
              <Typography gutterBottom color="textSecondary">
                AI, NLP, Python
              </Typography>
              <Typography>
                Master's Thesis at KTH. Highest ranking model for Swedish
                Speech-to-text on the Common Voice test set.
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
          <Card className={classes.card}>
            <CardContent>
              <Typography gutterBottom variant="body2">
                <span role="img">☝️</span>
              </Typography>
              <Typography gutterBottom variant="h3" component="h2">
                Sign Language Teacher
              </Typography>
              <Typography gutterBottom color="textSecondary">
                AI, Vision, Python
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
          <Card className={classes.card}>
            <CardContent>
              <Typography gutterBottom variant="body2">
                <span role="img">📰</span>
              </Typography>
              <Typography gutterBottom variant="h3" component="h2">
                News Recommender
              </Typography>
              <Typography gutterBottom color="textSecondary">
                AI, NLP, Python, Django
              </Typography>
              <Typography>
                Description description description description description
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                href="https://github.com/viktor-enzell/news-recommender"
                target="_blank"
              >
                Github repo
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card className={classes.card}>
            <CardContent>
              <Typography gutterBottom variant="body2">
                💬
              </Typography>
              <Typography gutterBottom variant="h3" component="h2">
                Tweet Analyzer
              </Typography>
              <Typography gutterBottom color="textSecondary">
                AI, NLP, Python, Django
              </Typography>
              <Typography>
                Description description description description description
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                href="https://github.com/viktor-enzell/tweet-analyser"
                target="_blank"
              >
                Github repo
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card className={classes.card}>
            <CardContent>
              <Typography gutterBottom variant="body2">
                🤖
              </Typography>
              <Typography gutterBottom variant="h3" component="h2">
                Dataless Text Classification with BERT
              </Typography>
              <Typography gutterBottom color="textSecondary">
                AI, NLP, Python
              </Typography>
              <Typography>
                Description description description description description
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                href="https://github.com/viktor-enzell/fine-tune-bert"
                target="_blank"
              >
                Github repo
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card className={classes.card}>
            <CardContent>
              <Typography gutterBottom variant="body2">
                📝
              </Typography>
              <Typography gutterBottom variant="h3" component="h2">
                Collaborative Real-time Notes App
              </Typography>
              <Typography gutterBottom color="textSecondary">
                Node, React
              </Typography>
              <Typography>
                Description description description description description
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                href="https://github.com/viktor-enzell/pinboard"
                target="_blank"
              >
                Github repo
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card className={classes.card}>
            <CardContent>
              <Typography gutterBottom variant="body2">
                🏡
              </Typography>
              <Typography gutterBottom variant="h3" component="h2">
                Business Website Design
              </Typography>
              <Typography gutterBottom color="textSecondary">
                Wordpress, CSS, UI
              </Typography>
              <Typography>Freelance project.</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href="https://byhuset.se" target="_blank">
                byhuset.se
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card className={classes.card}>
            <CardContent>
              <Typography gutterBottom variant="body2">
                🏇
              </Typography>
              <Typography gutterBottom variant="h3" component="h2">
                Employment at Bricco
              </Typography>
              <Typography gutterBottom color="textSecondary">
                Python, Django, React, DevOps
              </Typography>
              <Typography>
                Worked full-time one year at Bricco on various projects... Here
                is link to website I was part in creating from scratch.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                href="https://svenskgalopp.se"
                target="_blank"
              >
                svenskgalopp.se
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card className={classes.card}>
            <CardContent>
              <Typography gutterBottom variant="body2">
                🕹
              </Typography>
              <Typography gutterBottom variant="h3" component="h2">
                Reinforcement Learning Racing Game
              </Typography>
              <Typography gutterBottom color="textSecondary">
                AI, C#, Unity
              </Typography>
              <Typography>
                Description description description description description
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                href="https://github.com/Maddi97/NDVW_RacingGame"
                target="_blank"
              >
                Github repo
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card className={classes.card}>
            <CardContent>
              <Typography gutterBottom variant="body2">
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
            <CardActions>
              <Button
                size="small"
                href="https://github.com/viktor-enzell/visit-list"
                target="_blank"
              >
                Github repo
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

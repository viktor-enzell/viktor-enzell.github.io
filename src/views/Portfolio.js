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
        This is a selection of projects I have previously worked on. It's a
        mixture of university, work, and hobby projects that I have shortly
        summarized and added links to further resources.
      </Typography>

      <Divider />

      <Grid container spacing={3} className={classes.portfolioGrid}>
        <Grid item xs={12}>
          <Card className={classes.card}>
            <CardContent>
              <Typography gutterBottom variant="body2">
                <span role="img" aria-label="talking emoji">
                  🗣
                </span>
              </Typography>
              <Typography gutterBottom variant="h3" component="h2">
                Swedish Speech-to-text
              </Typography>
              <Typography gutterBottom color="textSecondary">
                AI, NLP, Python
              </Typography>
              <Typography>
                In my Master's thesis at KTH, I trained language models to
                improve a Swedish open-source speech-to-text model for a
                specific domain. The domain-specific language models are not
                open-sourced but I trained a generic language model which is
                currently the highest ranking speech-to-text model on the
                Swedish Common Voice test set.
                <br />
                <br />
                The generic model can be accessed through Hugging Face directly
                or by using the TMH Python package where it is integrated. A
                link to the full thesis report will be included shortly.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                href="https://huggingface.co/viktor-enzell/wav2vec2-large-voxrex-swedish-4gram"
                target="_blank"
              >
                Repo
              </Button>
              <Button
                size="small"
                href="https://huggingface.co/spaces/viktor-enzell/wav2vec2-large-voxrex-swedish-4gram"
                target="_blank"
              >
                Demo
              </Button>
              <Button
                size="small"
                href="https://pypi.org/project/tmh/"
                target="_blank"
              >
                TMH
              </Button>
              <Button
                size="small"
                href="https://paperswithcode.com/sota/speech-recognition-on-common-voice-swedish"
                target="_blank"
              >
                leaderboard
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card className={classes.card}>
            <CardContent>
              <Typography gutterBottom variant="body2">
                <span role="img" aria-label="man on horse emoji">
                  🏇
                </span>
              </Typography>
              <Typography gutterBottom variant="h3" component="h2">
                Employment at Bricco
              </Typography>
              <Typography gutterBottom color="textSecondary">
                Python, Django, Node, React, DevOps
              </Typography>
              <Typography>
                Between my Bachelor's and Master's degrees, I worked full-time
                for one year at the consultancy firm Bricco. During my Master's
                studies, I continued working part-time. It's a small company
                where I had the opportunity to work in all parts of the stack
                and on several different projects.
                <br />
                <br />
                Main technologies included Python, Django, React, Node,
                Elasticsearch, Relational databases, NoSQL databases, GCP and
                Linux servers.
                <br />
                <br />
                Below is a link to a website I was part in creating from start
                to finish.
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
                <span role="img" aria-label="pointing up emoji">
                  ☝️
                </span>
              </Typography>
              <Typography gutterBottom variant="h3" component="h2">
                Sign Language Teacher
              </Typography>
              <Typography gutterBottom color="textSecondary">
                AI, Vision, Python
              </Typography>
              <Typography>
                A group project during my exchange semester at the Master in
                Artificial Intelligence at UPC in Barcelona. Using the web
                camera of a laptop and hand tracking with MediaPipe, we trained
                a classifier for sign language. Using this classifier, we built
                a program for teaching sign language.
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
                <span role="img" aria-label="news paper emoji">
                  📰
                </span>
              </Typography>
              <Typography gutterBottom variant="h3" component="h2">
                News Recommender
              </Typography>
              <Typography gutterBottom color="textSecondary">
                AI, NLP, Python, Django
              </Typography>
              <Typography>
                A website for searching through scraped news articles where the
                results are ranked based on previous user feedback. News
                articles and user preferences are represented in the same latent
                space by training a doc2vec model on news articles. Done as a
                group project at KTH.
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
                <span role="img" aria-label="talk bubble emoji">
                  💬
                </span>
              </Typography>
              <Typography gutterBottom variant="h3" component="h2">
                Tweet Analyzer
              </Typography>
              <Typography gutterBottom color="textSecondary">
                AI, NLP, Python, Django
              </Typography>
              <Typography>
                A tool for analyzing tweet engagement by looking at statistics
                and sentiment. Done as a group project at the Master in
                Artificial Intelligence at UPC in Barcelona.
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
                <span role="img" aria-label="house emoji">
                  🏡
                </span>
              </Typography>
              <Typography gutterBottom variant="h3" component="h2">
                Business Website Design
              </Typography>
              <Typography gutterBottom color="textSecondary">
                Wordpress, CSS, UI
              </Typography>
              <Typography>
                A freelance project, redesigning the layout of a business
                website. It's a multi-faceted business involved in interior
                design, events, clothing, and a cafe.
              </Typography>
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
                <span role="img" aria-label="robot emoji">
                  🤖
                </span>
              </Typography>
              <Typography gutterBottom variant="h3" component="h2">
                Dataless Text Classification with BERT
              </Typography>
              <Typography gutterBottom color="textSecondary">
                AI, NLP, Python
              </Typography>
              <Typography>
                An exploration of dataless text classification with BERT. The
                main chunk of the work is presented in a separate report and
                this repo contains the code for reproducing the experiments.
                Done in a group of two, at the Master in AI at UPC.
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
                <span role="img" aria-label="building emoji">
                  🏢
                </span>
              </Typography>
              <Typography gutterBottom variant="h3" component="h2">
                Property Investment Analyzer
              </Typography>
              <Typography gutterBottom color="textSecondary">
                AI, GPT-3, Python, Django
              </Typography>
              <Typography>
                An application for analyzing the profitability of apartment
                investments in Barcelona. Using regression models for house
                price and rent price, and integrating GPT-3 through the OpenAI
                API for generating a property description. Done as a group
                project at the Master in AI at UPC.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                href="https://github.com/viktor-enzell/idss-project"
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
                <span role="img" aria-label="joystick emoji">
                  🕹
                </span>
              </Typography>
              <Typography gutterBottom variant="h3" component="h2">
                Reinforcement Learning Racing Game
              </Typography>
              <Typography gutterBottom color="textSecondary">
                AI, C#, Unity
              </Typography>
              <Typography>
                A Mario Kart-like game in Unity, using reinforcement learning to
                train the opponents. Done as a group project at the Master in AI
                at UPC.
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
                <span role="img" aria-label="note emoji">
                  📝
                </span>
              </Typography>
              <Typography gutterBottom variant="h3" component="h2">
                Collaborative Real-time Notes App
              </Typography>
              <Typography gutterBottom color="textSecondary">
                Node, React
              </Typography>
              <Typography>
                Using websockets to create a real-time collaborative note taking
                app. Done as a group project during my Bachelor studies at
                Uppsala University.
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
                <span role="img" aria-label="pin emoji">
                  📍
                </span>
              </Typography>
              <Typography gutterBottom variant="h3" component="h2">
                Visit List
              </Typography>
              <Typography gutterBottom color="textSecondary">
                Java, React
              </Typography>
              <Typography>
                Playing around with Java and the Spring Framework to create a
                REST API backend for a visit list with a React client.
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

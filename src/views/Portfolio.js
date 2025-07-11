import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Divider,
  Link,
} from "@mui/material";
import {
  headerHeight,
  footerHeight,
  topMargin,
  smBreakpointWidth,
} from "./Home";
import useWindowDimensions from "../hooks/useWindowDimensions";
import img12 from "../img/dalle/Many old school microphones floating freely on a purple background, oil painting.jpg";
import img13 from "../img/dalle/Earth from space, oil painting.jpg";
import img14 from "../img/dalle/An old school tv, oil painting.jpg";
import img1 from "../img/dalle/A robot transcribing a human speaker, oil painting.jpg";
import img2 from "../img/dalle/A fast paced horse race from a distance, oil painting.jpg";
import img3 from "../img/dalle/A robot teaching sign language, oil painting.jpg";
import img4 from "../img/dalle/A newsstand salesman recommending newspapers, oil painting.jpg";
import img5 from "../img/dalle/A tweeting bird, oil painting.jpg";
import img6 from "../img/dalle/Scandinavian interior design, oil painting.jpg";
import img7 from "../img/dalle/Three clouds in different colors, oil painting.jpg";
import img8 from "../img/dalle/A Barcelona building in the Eixample district, oil painting.jpg";
import img9 from "../img/dalle/Mariokart gameplay from above, oil painting.jpg";
import img10 from "../img/dalle/Two kids drawing on the same note, oil painting.jpg";
import img11 from "../img/dalle/A world map with pins on different nations, oil painting.jpg";
import { styled } from "@mui/material/styles";

const Root = styled("div")(({ theme }) => ({
  marginTop: topMargin,
  height: "100%",
  width: "100%",
  minHeight: `calc(100vh - ${headerHeight}px - ${footerHeight}px - ${topMargin}px)`,
}));

const PortfolioGrid = styled(Grid)({
  marginTop: "0px",
  marginLeft: "-24px",
});

const TextParagraph = styled(Typography)({
  marginBottom: "24px",
});

const StyledCard = styled(Card)({
  borderStyle: "solid",
  borderColor: "#e0e0e0",
  borderWidth: "1px",
  boxShadow: "none",
  height: "100%",
  display: "flex",
  flexDirection: "column",
});

const StyledCardContent = styled(CardContent)({
  flexGrow: 1,
});

const CardImageWrapper = styled("div")(({ theme, isLargeScreen }) => ({
  height: isLargeScreen ? "280px" : "180px",
}));

const CardImageStyled = styled(CardMedia)({
  height: "100%",
  "& .MuiCardMedia-img": {
    height: "100%",
    objectFit: "cover",
  },
});

const getImageName = (img) => {
  return img.split("/")[3].split(".")[0];
};

export default function Portfolio() {
  const { width } = useWindowDimensions();

  return (
    <Root>
      <Typography variant="h1" gutterBottom>
        Portfolio
      </Typography>
      <TextParagraph>
        This is a selection of projects I have previously worked on. It's a
        mixture of university, work, and hobby projects that I have shortly
        summarized and added links to further resources.
        <br />
        <br />I have generated all the images using the generative AI model
        DALL-E 2 from OpenAI. The prompts used to generate the images are
        included in the alt-attributes of each image.
      </TextParagraph>

      <Divider />

      <PortfolioGrid container spacing={3}>
        <Grid item xs={12}>
          <StyledCard>
            <CardImageWrapper isLargeScreen={width > smBreakpointWidth}>
              <CardImageStyled
                component="div"
                image={img13}
                alt={getImageName(img13)}
              >
                <img
                  src={img13}
                  alt={getImageName(img13)}
                  style={{ display: "none" }}
                />
              </CardImageStyled>
            </CardImageWrapper>
            <StyledCardContent>
              <Typography gutterBottom variant="h3" component="h2">
                Indie Development and Freelancing
              </Typography>
              <Typography gutterBottom color="textSecondary">
                Full stack, AI
              </Typography>
              <Typography>
                As an indie developer and freelancer, I'm currently building and
                maintaining PodReader, a platform that automatically transforms
                newsletters into podcasts using natural-sounding AI voices. The
                platform helps newsletter publishers grow their audience by
                repurposing their content with advanced customization and audio
                editing features.
                <br />
                <br />
                In my freelance work, I specialize in AI, Python, and full-stack
                JavaScript development. Recent projects include a six-month
                contract with Solace Care, an early-stage startup, where I
                collaborated with their CTO to build their SaaS product from
                scratch, contributing to product planning, CI/CD pipelines,
                and AWS infrastructure.
                <br />
                <br />
                I also maintain PodScribbler, a mini-project I built while
                experimenting with new tech stacks that allows for filtering
                and combining podcast RSS feeds.
              </Typography>
            </StyledCardContent>
            <CardActions>
              <Button size="small" href="https://podreader.ai/" target="_blank">
                PODREADER (Indie)
              </Button>
              <Button size="small" href="https://podscribbler.com/" target="_blank">
                PODSCRIBBLER (Indie)
              </Button>
              <Button size="small" href="https://solace.care/" target="_blank">
                SOLACE CARE (Freelance)
              </Button>
            </CardActions>
          </StyledCard>
        </Grid>

        <Grid item xs={12}>
          <StyledCard>
            <CardImageWrapper isLargeScreen={width > smBreakpointWidth}>
              <CardImageStyled
                component="div"
                image={img12}
                alt={getImageName(img12)}
              >
                <img
                  src={img12}
                  alt={getImageName(img12)}
                  style={{ display: "none" }}
                />
              </CardImageStyled>
            </CardImageWrapper>
            <StyledCardContent>
              <Typography gutterBottom variant="h3" component="h2">
                Employment at All Ears
              </Typography>
              <Typography gutterBottom color="textSecondary">
                Full stack, AI, DevOps
              </Typography>
              <Typography>
                During my two years at All Ears, I worked as a developer on
                their innovative SaaS platform. The product specializes in
                detecting and analyzing brand mentions across various audio
                media sources, including TikTok, podcasts, radio broadcasts, and
                YouTube content.
              </Typography>
            </StyledCardContent>
            <CardActions>
              <Button size="small" href="https://allears.ai/" target="_blank">
                ALLEARS.AI
              </Button>
            </CardActions>
          </StyledCard>
        </Grid>

        <Grid item xs={12}>
          <StyledCard>
            <CardImageWrapper isLargeScreen={width > smBreakpointWidth}>
              <CardImageStyled
                component="div"
                image={img1}
                alt={getImageName(img1)}
              >
                <img
                  src={img1}
                  alt={getImageName(img1)}
                  style={{ display: "none" }}
                />
              </CardImageStyled>
            </CardImageWrapper>
            <StyledCardContent>
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
                open-sourced but I trained a generic language model which at the
                time was the highest ranking speech-to-text model on the Swedish
                Common Voice test set.
                <br />
                <br />
                {"Link to the full report: "}
                <Link
                  href="https://www.diva-portal.org/smash/get/diva2:1701482/FULLTEXT01.pdf"
                  target="_blank"
                  color="inherit"
                >
                  {"Master's thesis"}
                </Link>
                .
                <br />
                <br />
                The open-sourced model can be accessed through Hugging Face or
                by using the TMH PyPi package where it is integrated. The links
                below lead to the different model resources.
              </Typography>
            </StyledCardContent>
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
          </StyledCard>
        </Grid>

        <Grid item xs={12}>
          <StyledCard>
            <CardImageWrapper isLargeScreen={width > smBreakpointWidth}>
              <CardImageStyled
                component="div"
                image={img2}
                alt={getImageName(img2)}
              >
                <img
                  src={img2}
                  alt={getImageName(img2)}
                  style={{ display: "none" }}
                />
              </CardImageStyled>
            </CardImageWrapper>
            <StyledCardContent>
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
            </StyledCardContent>
            <CardActions>
              <Button
                size="small"
                href="https://svenskgalopp.se"
                target="_blank"
              >
                svenskgalopp.se
              </Button>
            </CardActions>
          </StyledCard>
        </Grid>

        <Grid item xs={12} sm={6}>
          <StyledCard>
            <CardImageWrapper isLargeScreen={false}>
              <CardImageStyled
                component="div"
                image={img14}
                alt={getImageName(img14)}
              >
                <img
                  src={img14}
                  alt={getImageName(img14)}
                  style={{ display: "none" }}
                />
              </CardImageStyled>
            </CardImageWrapper>
            <StyledCardContent>
              <Typography gutterBottom variant="h3" component="h2">
                Open Source contributions to yt-dlp
              </Typography>
              <Typography gutterBottom color="textSecondary">
                Python, Web scraping
              </Typography>
              <Typography>
                yt-dlp is a tool for downloading audio and video content from
                various platforms. I have contributed to the repo by fixing bugs
                in spiders.
              </Typography>
            </StyledCardContent>
            <CardActions>
              <Button
                size="small"
                href="https://github.com/yt-dlp/yt-dlp"
                target="_blank"
              >
                GITHUB REPO
              </Button>
            </CardActions>
          </StyledCard>
        </Grid>

        <Grid item xs={12} sm={6}>
          <StyledCard>
            <CardImageWrapper isLargeScreen={false}>
              <CardImageStyled
                component="div"
                image={img3}
                alt={getImageName(img3)}
              >
                <img
                  src={img3}
                  alt={getImageName(img3)}
                  style={{ display: "none" }}
                />
              </CardImageStyled>
            </CardImageWrapper>
            <StyledCardContent>
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
            </StyledCardContent>
            <CardActions>
              <Button
                size="small"
                href="https://github.com/viktor-enzell/sign-language-teacher"
                target="_blank"
              >
                Github repo
              </Button>
            </CardActions>
          </StyledCard>
        </Grid>

        <Grid item xs={12} sm={6}>
          <StyledCard>
            <CardImageWrapper isLargeScreen={false}>
              <CardImageStyled
                component="div"
                image={img4}
                alt={getImageName(img4)}
              >
                <img
                  src={img4}
                  alt={getImageName(img4)}
                  style={{ display: "none" }}
                />
              </CardImageStyled>
            </CardImageWrapper>
            <StyledCardContent>
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
            </StyledCardContent>
            <CardActions>
              <Button
                size="small"
                href="https://github.com/viktor-enzell/news-recommender"
                target="_blank"
              >
                Github repo
              </Button>
            </CardActions>
          </StyledCard>
        </Grid>

        <Grid item xs={12} sm={6}>
          <StyledCard>
            <CardImageWrapper isLargeScreen={false}>
              <CardImageStyled
                component="div"
                image={img5}
                alt={getImageName(img5)}
              >
                <img
                  src={img5}
                  alt={getImageName(img5)}
                  style={{ display: "none" }}
                />
              </CardImageStyled>
            </CardImageWrapper>
            <StyledCardContent>
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
            </StyledCardContent>
            <CardActions>
              <Button
                size="small"
                href="https://github.com/viktor-enzell/tweet-analyser"
                target="_blank"
              >
                Github repo
              </Button>
            </CardActions>
          </StyledCard>
        </Grid>

        <Grid item xs={12} sm={6}>
          <StyledCard>
            <CardImageWrapper isLargeScreen={false}>
              <CardImageStyled
                component="div"
                image={img6}
                alt={getImageName(img6)}
              >
                <img
                  src={img6}
                  alt={getImageName(img6)}
                  style={{ display: "none" }}
                />
              </CardImageStyled>
            </CardImageWrapper>
            <StyledCardContent>
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
            </StyledCardContent>
            <CardActions>
              <Button size="small" href="https://byhuset.se" target="_blank">
                byhuset.se
              </Button>
            </CardActions>
          </StyledCard>
        </Grid>

        <Grid item xs={12} sm={6}>
          <StyledCard>
            <CardImageWrapper isLargeScreen={false}>
              <CardImageStyled
                component="div"
                image={img7}
                alt={getImageName(img7)}
              >
                <img
                  src={img7}
                  alt={getImageName(img7)}
                  style={{ display: "none" }}
                />
              </CardImageStyled>
            </CardImageWrapper>
            <StyledCardContent>
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
            </StyledCardContent>
            <CardActions>
              <Button
                size="small"
                href="https://github.com/viktor-enzell/fine-tune-bert"
                target="_blank"
              >
                Github repo
              </Button>
            </CardActions>
          </StyledCard>
        </Grid>

        <Grid item xs={12} sm={6}>
          <StyledCard>
            <CardImageWrapper isLargeScreen={false}>
              <CardImageStyled
                component="div"
                image={img8}
                alt={getImageName(img8)}
              >
                <img
                  src={img8}
                  alt={getImageName(img8)}
                  style={{ display: "none" }}
                />
              </CardImageStyled>
            </CardImageWrapper>
            <StyledCardContent>
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
            </StyledCardContent>
            <CardActions>
              <Button
                size="small"
                href="https://github.com/viktor-enzell/idss-project"
                target="_blank"
              >
                Github repo
              </Button>
            </CardActions>
          </StyledCard>
        </Grid>

        <Grid item xs={12} sm={6}>
          <StyledCard>
            <CardImageWrapper isLargeScreen={false}>
              <CardImageStyled
                component="div"
                image={img9}
                alt={getImageName(img9)}
              >
                <img
                  src={img9}
                  alt={getImageName(img9)}
                  style={{ display: "none" }}
                />
              </CardImageStyled>
            </CardImageWrapper>
            <StyledCardContent>
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
            </StyledCardContent>
            <CardActions>
              <Button
                size="small"
                href="https://github.com/Maddi97/NDVW_RacingGame"
                target="_blank"
              >
                Github repo
              </Button>
            </CardActions>
          </StyledCard>
        </Grid>

        <Grid item xs={12} sm={6}>
          <StyledCard>
            <CardImageWrapper isLargeScreen={false}>
              <CardImageStyled
                component="div"
                image={img10}
                alt={getImageName(img10)}
              >
                <img
                  src={img10}
                  alt={getImageName(img10)}
                  style={{ display: "none" }}
                />
              </CardImageStyled>
            </CardImageWrapper>
            <StyledCardContent>
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
            </StyledCardContent>
            <CardActions>
              <Button
                size="small"
                href="https://github.com/viktor-enzell/pinboard"
                target="_blank"
              >
                Github repo
              </Button>
            </CardActions>
          </StyledCard>
        </Grid>

        <Grid item xs={12} sm={6}>
          <StyledCard>
            <CardImageWrapper isLargeScreen={false}>
              <CardImageStyled
                component="div"
                image={img11}
                alt={getImageName(img11)}
              >
                <img
                  src={img11}
                  alt={getImageName(img11)}
                  style={{ display: "none" }}
                />
              </CardImageStyled>
            </CardImageWrapper>
            <StyledCardContent>
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
            </StyledCardContent>
            <CardActions>
              <Button
                size="small"
                href="https://github.com/viktor-enzell/visit-list"
                target="_blank"
              >
                Github repo
              </Button>
            </CardActions>
          </StyledCard>
        </Grid>
      </PortfolioGrid>
    </Root>
  );
}

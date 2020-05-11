import React from "react";
import { Link, withPrefix, graphql, StaticQuery } from "gatsby";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SwipeableViews from "react-swipeable-views";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { autoPlay } from "react-swipeable-views-utils";
import withStyles from "@material-ui/styles/withStyles";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
  cardMedia: {
    height: "200px",
  },
};

class Carousel extends React.Component {
  state = {
    activeStep: 0,
  };

  items = [
    {
      node: {
        id: "31d6a4bf-62e5-5211-9d87-2537f9628a52",
        excerpt:
          "A one year AI program in Data Science, Machine Learning, and Deep Learning.",
        frontmatter: {
          title: "Artificial Intelligence (AI)",
          date: "Unknown",
          path: "/",
          image: {
            publicURL:
              "//images.ctfassets.net/6y7x6a0he6ux/fnmiegLZP7y4t5vqUvrsl/bc8175659334f378aeeed53521a18d20/ai.jpeg",
          },
        },
      },
    },
  ];

  handleNext = () => {
    this.setState((prevState) => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState((prevState) => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleStepChange = (activeStep) => {
    this.setState({ activeStep });
  };

  render() {
    const { activeStep } = this.state;
    const { classes, items } = this.props;
    const maxSteps = items.length;

    console.log("items: ", items);
    const filteredData = [];
    return (
      <Paper elevation={0}>
        <StaticQuery
          query={graphql`
            {
              allContentfulFranchisee {
                nodes {
                  courseCatalog {
                    programsAvailable {
                      title
                      id
                      shortDescription {
                        shortDescription
                      }
                      image {
                        title
                        file {
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
          `}
          render={(data) => {
            const defaultData =
              data.allContentfulFranchisee.nodes[0].courseCatalog
                .programsAvailable;
            console.log("defaultData: ", defaultData);
            defaultData.forEach((dataItem, dataIndex) => {
              const filteredItem = Object.assign(
                {},
                {
                  node: {
                    id: dataItem.id,
                    excerpt: dataItem.shortDescription.shortDescription,
                    frontmatter: {
                      title: dataItem.title,
                      date: "Unknown",
                      path: "/programs",
                      image: {
                        publicURL: dataItem.image.file.url,
                      },
                    },
                  },
                }
              );
              filteredData.push(filteredItem);
            });
            this.items = filteredData;
          }}
        ></StaticQuery>

        <div>
          <Typography>
            {(this.items[activeStep] || { title: "qwerty" }).title}
          </Typography>
          <AutoPlaySwipeableViews
            axis={"x"}
            enableMouseEvents
            index={activeStep}
            onChangeIndex={this.handleStepChange}
          >
            {/* {JSON.stringify(this.items)} */}
            {this.items.length > 0
              ? this.items.map((item, index) => {
                  console.log("this.items > item: ", item);
                  console.log("this.items > index: ", index);
                  const {
                    node: {
                      excerpt,
                      frontmatter: {
                        path,
                        title,
                        image: { publicURL },
                      },
                    },
                  } = item;
                  return (
                    <div key={index}>
                      {Math.abs(activeStep - index) <= 2 ? (
                        <Card>
                          <CardMedia
                            className={classes.cardMedia}
                            image={publicURL}
                          />
                          <CardContent>
                            <Typography
                              component="h2"
                              gutterBottom
                              variant="h5"
                            >
                              <Link to={path}>{title}</Link>
                            </Typography>
                            <Typography component="p">{excerpt}</Typography>
                          </CardContent>
                        </Card>
                      ) : null}
                    </div>
                  );
                })
              : null}
          </AutoPlaySwipeableViews>
          <MobileStepper
            activeStep={activeStep}
            backButton={
              <Button
                disabled={activeStep === 0}
                onClick={this.handleBack}
                size="small"
              >
                Back
              </Button>
            }
            nextButton={
              <Button
                disabled={activeStep === maxSteps - 1}
                onClick={this.handleNext}
                size="small"
              >
                Next
              </Button>
            }
            position="static"
            steps={this.items.length}
          />
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(Carousel);

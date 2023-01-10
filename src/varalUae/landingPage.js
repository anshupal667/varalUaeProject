import {
  Box,
  Button, Hidden,
  IconButton,
  InputBase,
  Link,
  makeStyles,
  TextField,
  Typography
} from "@material-ui/core";
import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import SearchIcon from '@material-ui/icons/Search';
import Data from "./data";
import ChargesInformation from "./chargesInformation";
import MenuIcon from '@material-ui/icons/Menu';
import { PinDropSharp } from "@material-ui/icons";

const useStyle = makeStyles(theme => ({
  header: {
    display: "flex",
    alignItems: 'center',
    margin: "2rem 4rem",
    [theme.breakpoints.down("xs")]: {
      margin: "25px",
      width: "100%",
    },

  },
  headerContent: {
    display: "flex",
    width: "90%",
    alignItems: "center",
    justifyContent: "end",
    [theme.breakpoints.down("xs")]: {
      width: "50%",
    },
  },
  headerButton: {
    height: "13vh",
    width: "15vw",
    textTransform: "capitalize",
    fontSize: "1.2rem"
  },
  headerItem: {
    fontSize: "25px",
    color: "#837c7c"
  },
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  searchIcon: {
    padding: "25px 377px",
    color: "blue",
    // height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      padding: "27px 308px",
    },
  },
  searchField: {
    display: 'flex',
    justifyContent: "end",
    marginRight: "4rem",
    [theme.breakpoints.down("xs")]: {
      margin: "0",
      //  width:"100%",
    },
  },
  searchField1: {
    border: "3px solid blue",
    width: '27vw',
    height: "10vh",
    borderRadius: '6px',
    color: "blue",
    fontSize: "28px",
    //  margin:"41px",
    "&.MuiInputBase-input": {
      margin: "45px"
    },
    [theme.breakpoints.down("xs")]: {
      margin: "0",
      width: "100%",
    },
  },
  aboutVaral: {
    width: "50%",
    [theme.breakpoints.down("xs")]: {
      margin: "0",
      width: "100%",
    },
  },
  aboutVaral1: {
    display: "flex",
    margin: "4rem",
    [theme.breakpoints.down("xs")]: {
      margin: "12px",
      width: "100%",
    },


  },
  buttonGroup: {
    display: "flex",
    marginTop: "2rem"
  },
  buttonGroup1: {
    height: "12vh",
    width: "15vw",
    fontSize: "1.1rem",
    textTransform: "capitalize",
    marginTop: "2rem",
    [theme.breakpoints.down("xs")]: {
      margin: "0",
      width: "100%",
    },

  },
  comapanyGoal: {
    // border: '2px solid',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "40%",
    [theme.breakpoints.down("xs")]: {
      // margin:"0",
      width: "100%",
    },

  },
  comapany: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "center",
    textAlign: "center",
    margin: "75px 0px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginTop: "35px"
    },

  },
  howWorks: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexWrap: "wrap",
      width: "100%"
    },
  },
  heading: {
    width: "29vw",
    margin: "7rem",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      margin: "0px"
    },

  },
  cardImg: {
    marginTop: "2rem"
  },
  cardMedia: {
    border: "2px solid #e3e3e3",
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: "10rem",
    borderRadius: "6px",
    marginBottom: "2rem",
    [theme.breakpoints.down("xs")]: {
      marginTop: "5rem",
    },
  },
  cardMedia1: {
    border: "2px solid #e3e3e3",
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: "10px",
  },
  cardContent: {
    margin: "35px"
  },
  contactInformation: {
    display: "flex",
    flexWrap: "wrap"
  },
  contactInformation1: {
    width: '26%',
    margin: '52px',
    [theme.breakpoints.down("xs")]: {
      margin: "25px",
      width: "100%",
    },

  },
  contactInformation2: {
    marginTop: "12px"
  },
  root1: {
    "&.MuiPaper-root": {
      backgroundColor: ""
    }
  },
  aboutComapny: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexWrap: "wrap",
      margin: "12px"
    },

  },
  aboutComapny1: {
    margin: "60px 180px",
    [theme.breakpoints.down("xs")]: {
      margin: "0",
      width: "100%",
    },

  },

  contactCompany1: {
    margin: "27px"
  },
  comapnyDetails: {
    display: "flex",
    justifyContent: "center",
    marginTop: "3rem"
  },
  wifiImg: {
    border: "3px solid blue",
    width: "32%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  comapnyDetails1: {
    marginLeft: "10px",
  },
  comapnyDetails2: {
    backgroundColor: "blue",
    // border:"2px solid red",
    display: "flex",
    justifyContent: "center",
    color: "white",
    borderRadius: "4px",
    marginTop: "3rem",
    marginBottom: "4rem"
  },
  wifiImg1: {
    border: "3px solid white",
    width: "32%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  chargesList: {
    width: "100%",
    // border:"2px solid",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  Review1: {
    display: "flex",
    marginTop: '35px'
  },
  ReviewIcon: {
    border: "3px solid blue",
    borderRadius: "50%",
    width: "19%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "10vh",
    marginRight: "25px",
    [theme.breakpoints.down("xs")]: {
      width: "22%"
    },
  },
  icon: {
    margin: "12px 12px",
    "&.MuiSvgIcon-fontSizeLarge": {
      fontSize: "4.1875rem",
    }
  },
  chargesInformation: {
    display: "flex",
  },
  chargeListHeading: {
    textAlign: "center",
    width: "41vw",
    [theme.breakpoints.down("xs")]: {
      width: "100%"
    },
  }
}))

const LandingPg = () => {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.header}>
        <Typography variant="h4" component="h1">Varal<span style={{ backgroundColor: "blue", color: "white", borderRadius: "100%", height: "58px" }}>uae</span></Typography>
        <Box className={classes.headerContent}>
        <Hidden smUp>
          <IconButton>
          <MenuIcon fontSize="large"/>
          </IconButton>
          </Hidden>
          <Hidden smDown>
            <Typography className={classes.root}>
              <Link className={classes.headerItem}>Home</Link>
              <Link className={classes.headerItem}>Services</Link>
              <Link className={classes.headerItem}>Pricing</Link>
              <Link className={classes.headerItem}>About us</Link>
              <Button className={classes.headerButton} variant="contained" color="primary">Start a company</Button>
            </Typography>
          </Hidden>
        </Box>
      </Box>
      <Box className={classes.searchField}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase placeholder="Search a term topic"  inputProps={{ "aria-label": "search" }} className={classes.searchField1} />

      </Box>


      {/* ******************************************************************************************************************8 */}

      <Box className={classes.aboutVaral1}>
        <Box className={classes.aboutVaral}>
          <Typography gutterBottom color="primary" variant="h5" component="h1">Claim a Free Quote</Typography>
          <Typography gutterBottom variant="h2" component="h1" style={{ fontWeight: "700" }}>Get started on fulfilling your Dubai or UAE dream.</Typography>
          <Hidden smUp>
            <Box className={classes.aboutVaral}>
              <img src="/Assets/ILLUSTRATION.png" height="250" />
            </Box>
          </Hidden>
          <Typography gutterBottom color="primary" variant="h4" component="h1">UAE & Offshore Company</Typography>
          <Typography color="textSecondary" variant="h4" component="h1">We provide you with information about UAE or
            Offshore Company Registration & help you
            setup your company with a bank account and
            visas.</Typography>
          <Box className={classes.buttonGroup}>
            <Button variant="contained" color="primary" className={classes.buttonGroup1}>Start a Company</Button>
            <Button variant="outlined" color="primary" className={classes.buttonGroup1}>Renew a Company</Button>
          </Box>
        </Box>
        <Hidden smDown>
          <Box className={classes.aboutVaral}>
            <img src="/Assets/ILLUSTRATION.png" height="570" />
          </Box>
        </Hidden>
      </Box>


      {/* ********************************************************************************************************* */}

      <Box className={classes.comapany}>
        <Typography gutterBottom color="primary" variant="h5" component="h5">
          Watch the video about UAE or Offshore Company Registration
          <IconButton>
            <PlayCircleFilledIcon color="primary" />
          </IconButton>
        </Typography>
        <Box className={classes.comapanyGoal}>
          <Typography variant="h4" component="h5" style={{ fontWeight: "700" }}>Dedicated</Typography>
          <Typography gutterBottom variant="h4" component="h5" style={{ fontWeight: "700" }}>to our mission we are</Typography>
          <Typography gutterBottom color="textSecondary" variant="h5" component="h1">Our services include Company Formation & Renewals,Trust & Fiduciary, Tax Residency Setup With Family, Bank Accounts, Remote Management, Stock Trading Platforms, Ownership Solutions.</Typography>
        </Box>
      </Box>

      {/* *************************************CONTACT INFORFMATION **************************************************8 */}

      <Box className={classes.contactInformation}>
        <Box className={classes.contactInformation1}>
          <img src="/Assets/dungeon.png" />
          <Box className={classes.contactInformation2}>
            <Typography gutterBottom variant="h5" component="h1" style={{ fontWeight: "700" }}>UAE Free Zone Company</Typography>
            <Typography gutterBottom color="textSecondary" variant="body1" component="p">Your registration agent, will answer all of your questions and help you to reach a conclusion that meets your objectives of investing in the UAE.</Typography>
            <Button color="secondary">Get Started</Button>
          </Box>
        </Box>
        <Box className={classes.contactInformation1}>
          <img src="/Assets/Vector-2.png" height="42" />
          <Box className={classes.contactInformation2}>
            <Typography gutterBottom variant="h5" component="h1" style={{ fontWeight: "700" }}>Dubai Local Companies</Typography>
            <Typography gutterBottom color="textSecondary" variant="body1" component="p">The Dubai LLC formation documents are actually articles of organization or a certificate of organization. You can get yours today</Typography>
            <Button color="secondary">Get Started</Button>
          </Box>
        </Box>
        <Box className={classes.contactInformation1}>
          <img src="/Assets/Vector-1.png" height="42" />
          <Box className={classes.contactInformation2}>
            <Typography gutterBottom variant="h5" component="h1" style={{ fontWeight: "700" }}>Offshore Compamies</Typography>
            <Typography gutterBottom color="textSecondary" variant="body1" component="p">You can register an offshore company and open its bank account in Dubai.Your agent will help you along all the process</Typography>
            <Button color="secondary">Get Started</Button>
          </Box>
        </Box>
      </Box>


      {/* ************************************************************************************************************************** */}


      <Box className={classes.howWorks}>
        <Box className={classes.heading}>
          <Typography gutterBottom variant="h5" component="h1">Learn the ways in which you can benefit from a UAE/Offshore Company. Then get started on fulfilling your UAE dream</Typography>
          <Typography color="primary" gutterBottom variant="h5" component="h1"> Claim a Free Quote</Typography>
          <Box>
            <Box className={classes.cardMedia}>
              <img
                alt="Contemplative Reptile"
                height="155"
                width="150"
                src="/Assets/ILLUSTRATION03.png"
                // title="Contemplative Reptile"
                className={classes.cardImg}
              />

              <Box className={classes.cardContent}>
                <Typography gutterBottom variant="h4" component="h5">
                  Bank Account Setup
                </Typography>
                <Typography variant="h5" color="textSecondary" component="h5">
                  There are many banks in the United
                  Arab Emirates [UAE]. Both locally
                  owned and branches of
                  multinational ones. Foreign banks
                  adjust according to their parent s
                  strategies and have changed local
                  requirements overnight in the past.
                  But we are here to help you.
                </Typography>
                <Link>Learn More</Link>
                <IconButton>
                  <ArrowForwardIcon color="primary" />
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Box>

            <Box className={classes.cardMedia}>

              <img
                component="img"
                alt="Contemplative Reptile"
                src="/Assets/Group-2.png"
                height="155"
                width="150"
                className={classes.cardImg}
              />
              <Box className={classes.cardContent}>
                <Typography gutterBottom variant="h4" component="h5">
                  UAE Company Visa
                </Typography>
                <Typography variant="h5" color="textSecondary" component="h5">
                  Your application for visas is critical
                  especially if you intend to move to
                  Dubai. This becomes even more
                  urgent if your family will also move
                  with you. All the paperwork is done
                  on your behalf smoothly so that you
                  may only focus on doing what
                  matters most to you
                </Typography>
                <Link>Learn More</Link>
                <IconButton>
                  <ArrowForwardIcon color="primary" />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={classes.heading}>
          <Box>
            <Box className={classes.cardMedia1}>

              <img
                component="img"
                alt="Contemplative Reptile"
                src="/Assets/Group.png"
                height="155"
                width="150"
                className={classes.cardImg}
              />
              <Box className={classes.cardContent}>
                <Typography gutterBottom variant="h4" component="h5">
                  Advice & Guidance
                </Typography>
                <Typography variant="h5" color="textSecondary" component="h5">
                  All activities in the UAE are licensed.
                  Whether manufacturing, finance,
                  trading, marketing, consultancy or
                  restaurants. In some countries only
                  manufacturing is licensed. In others
                  there is a threshold below which
                  business are encouraged. Get our
                  insightfull guidance today.
                </Typography>
                <Link>Learn More</Link>
                <IconButton>
                  <ArrowForwardIcon color="primary" />
                </IconButton>
              </Box>
            </Box>
          </Box>

          <Box>
            <Box className={classes.cardMedia}>

              <img
                component="img"
                alt="Contemplative Reptile"
                src="/Assets/Group-1.png"
                height="155"
                width="150"
                className={classes.cardImg}
              />
              <Box className={classes.cardContent}>
                <Typography gutterBottom variant="h4" component="h5">
                  Registration Document Perparation
                </Typography>
                <Typography variant="h5" color="textSecondary" component="h5">
                  Several documents must be
                  prepared to start the process of
                  registering a new company in the
                  United Arab Emirates. Be it a Dubai
                  local company, a free zone one or an
                  offshore entity. Your registered
                  agent is dedicated to get this done
                  for you for a seamless process.
                </Typography>

                <Link>Learn More</Link>
                <IconButton>
                  <ArrowForwardIcon color="primary" />
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Box>
            <Typography gutterBottom variant="h5" component="h5">We have gathered a team of
              professionals to craft adequate
              services you can rely on for a friction
              free setup in UAE.</Typography>
            <Link>More about our services </Link>
            <IconButton>
              <ArrowForwardIcon color="primary" />
            </IconButton>
          </Box>
        </Box>
      </Box>



      {/* ************************************************************************** */}
      <Hidden smDown>
        <Box className={classes.chargesList}>
          <Box className={classes.chargeListHeading}>
            <Typography gutterBottom variant="h4" component="h5" style={{ fontWeight: "700" }}>Most popular affordable pricing per jurisdictions are brought to you to kick off your adventure   </Typography>
          </Box>
          <Box className={classes.chargesInformation}>
            {Data.map((val) => {
              return (
                <>
                  <ChargesInformation
                    title={val.title}
                    payment={val.payment}
                    intro={val.intro}
                    info={val.info.ChargeInfo}
                  ></ChargesInformation>
                  {console.log("hii", val)}
                </>
              );
            })}
          </Box>
        </Box>
      </Hidden>

      {/* ****************************************** aboutComapny*********************************************** */}


      <Box className={classes.aboutComapny}>
        <Box className={classes.aboutComapny1}>
          <Typography gutterBottom variant="h5" component="h1" style={{ fontWeight: "700" }}>Read about our blogs for more information on our processes</Typography>
          <Box className={classes.comapnyDetails}>
            <Box className={classes.wifiImg} >
              <img src="/Assets/Vector-4.png" height="50px"></img>
            </Box>
            <Box className={classes.comapnyDetails1}>
              <Typography gutterBottom variant="h5" component="h1">How to start a company formation in Dubai</Typography>
              <Typography color="primary"><span>5 Minutes</span></Typography>
            </Box>
          </Box>
          <Box className={classes.comapnyDetails}>
            <Box className={classes.wifiImg} >
              <img src="/Assets/Vector-4.png" height="50px"></img>
            </Box>
            <Box className={classes.comapnyDetails1}>
              <Typography gutterBottom variant="h5" component="h1">How to start an Offshore company formation in Duba</Typography>
              <Typography color="primary"><span>5 Minutes</span></Typography>
            </Box>
          </Box>
          <Box className={classes.comapnyDetails2}>
            <Box className={classes.wifiImg1} >
              <img src="/Assets/Vector-4.png" height="50px"></img>
            </Box>
            <Box className={classes.comapnyDetails1}>
              <Typography gutterBottom variant="h5" component="h1">SEO Dubai: Who benefits the most?</Typography>
              <span>5 Minutes</span>
            </Box>
          </Box>

          {/* ****************************************** COLIGUE REVIEW*********************************************** */}

          <Typography gutterBottom variant="h5" component="h1">Satisfied We are When Our Customers Are Happy</Typography>
          <Box className={classes.Review}>
            <Box className={classes.Review1}>
              <Box className={classes.ReviewIcon}>
                <AccountCircleIcon className={classes.icon} color="primary" fontSize="large" />
              </Box>
              <Box>
                <Typography gutterBottom variant="h5" component="h5">"I am very happy with them. I’ll
                  continue to use their services in
                  future & highly recommend them
                  to anyone,"</Typography>
                <Typography gutterBottom variant="h5" component="h5" style={{ fontWeight: "700" }}>Muhib Abrar</Typography>
              </Box>
            </Box>
            <Box className={classes.Review1}>
              <Box className={classes.ReviewIcon}>
                <AccountCircleIcon className={classes.icon} color="primary" fontSize="large" />
              </Box>
              <Box>
                <Typography gutterBottom variant="h5" component="h5">"Rama has a high level of integrity,intellect, knowledge of hisbusiness, resourcefulness and humanity,"</Typography>
                <Typography gutterBottom variant="h5" component="h5" style={{ fontWeight: "700" }}>Colin Saldahna</Typography>
              </Box>
            </Box>
            <Box className={classes.Review1}>
              <Box className={classes.ReviewIcon}>
                <AccountCircleIcon className={classes.icon} color="primary" fontSize="large" />
              </Box>
              <Box>
                <Typography gutterBottom variant="h5" component="h5">"Your advise was so complete that I actually realized how beneficial this would be to my clients and my business."</Typography>
                <Typography gutterBottom variant="h5" component="h5" style={{ fontWeight: "700" }}>Mark Swann</Typography>
              </Box>
            </Box>
          </Box>
        </Box>



        {/*******************************************CONTACT US *****************************************/}


        <Box className={classes.aboutComapny1}>
          <Typography gutterBottom variant="h5" component="h5" style={{ fontWeight: "700" }}>Get to know the whole us and more of our services</Typography>
          <Box className={classes.contactCompany1}>
            <Typography variant="h5" component="h5">Services</Typography>
            <Typography color="textSecondary" variant="h5" component="h5">Products</Typography>
            <Typography color="textSecondary" variant="h5" component="h5">Assurance</Typography>
            <Typography color="textSecondary" variant="h5" component="h5">FAQ</Typography>
            <Typography color="textSecondary" variant="h5" component="h5">Working at Varal-Singhania</Typography>
          </Box>
          <Box className={classes.contactCompany1}>
            <Typography variant="h5" component="h5">Policies</Typography>
            <Typography color="textSecondary" variant="h5" component="h5">Privacy Policy</Typography>
            <Typography color="textSecondary" variant="h5" component="h5">Terms & Condition</Typography>
          </Box>
          <Box className={classes.contactCompany1}>
            <Typography variant="h5" component="h5">About</Typography>
            <Typography color="textSecondary" variant="h5" component="h5">About Us</Typography>
            <Typography color="textSecondary" variant="h5" component="h5">Contact Us</Typography>
          </Box>
          <Box className={classes.contactCompany1}>
            <Typography variant="h5" component="h5">Address</Typography>
            <Typography color="textSecondary" variant="h5" component="h5">608 One Lake Plaza, Cluster T,Al Sarayat Street, Jumeirah Lake Towers Dubai United Arab Emirates</Typography>
            <Typography color="textSecondary" variant="h5" component="h5" style={{ marginTop: "3rem" }}>Office Hours: Sunday to
              Thursday 8:30 AM to 6:30 PM
              [GMT+4]</Typography>
            <Typography color="textSecondary" variant="h5" component="h5">M: +971 55 794 2016</Typography>
            <Typography color="textSecondary" variant="h5" component="h5">O: +971 4 447 2061</Typography>
          </Box>
          <Box className={classes.contactCompany1}>
            <Typography variant="h5" component="h5">Subscribe Now</Typography>
            <Typography color="textSecondary" variant="h5" component="h5">Subscribe now to receive our Newsletters about amazing opportunities in Dubai</Typography>
          </Box>
          <Box className={classes.contactCompany1}>
            <TextField fullWidth placeholder="Enter email address" variant="outlined"></TextField>
          </Box>
          <Box className={classes.contactCompany1}>
            <FacebookIcon />
            <InstagramIcon />
            <LinkedInIcon />
            <YouTubeIcon />
          </Box>
        </Box>
      </Box>
      <Typography color="textSecondary" variant="body1" component="p" style={{ textAlign: "center" }}> Varaluae 2021 C All Right Reserved </Typography>
    </>
  );
}

export default LandingPg;
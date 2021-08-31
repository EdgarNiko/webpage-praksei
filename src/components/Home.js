import React from "react";
import Image from "./img2.png";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  main: {
    minHeight: "80vh",
    width: "90%",
    margin: " 0 auto .5em"
  }
}));

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <h2>Welcome</h2>
      <hr />
      <p>
        Pleased him another was settled for. Moreover end horrible endeavor
        entrance any families. Income appear extent on of thrown in admire.
        Stanhill on we if vicinity material in. Saw him smallest you provided
        ecstatic supplied. Garret wanted expect remain as mr. Covered parlors
        concern we express in visited to do. Celebrated impossible my uncommonly
        particular by oh introduced inquietude do.
      </p>
      <p>
        Prevailed sincerity behaviour to so do principle mr. As departure at no
        propriety zealously my. On dear rent if girl view. First on smart there
        he sense. Earnestly enjoyment her you resources. Brother chamber ten old
        against. Mr be cottage so related minuter is. Delicate say and blessing
        ladyship exertion few margaret. Delight herself welcome against smiling
        its for. Suspected discovery by he affection household of principle
        perfectly he.
      </p>
      <p>
        Delightful remarkably mr on announcing themselves entreaties favourable.
        About to in so terms voice at. Equal an would is found seems of. The
        particular friendship one sufficient terminated frequently themselves.
        It more shed went up is roof if loud case. Delay music in lived noise
        an. Beyond genius really enough passed is up.
      </p>
      <p>
        Delightful unreserved impossible few estimating men favourable see
        entreaties. She propriety immediate was improving. He or entrance
        humoured likewise moderate. Much nor game son say feel. Fat make met can
        must form into gate. Me we offending prevailed discovery.
      </p>
      <p>
        Left till here away at to whom past. Feelings laughing at no wondered
        repeated provided finished. It acceptance thoroughly my advantages
        everything as. Are projecting inquietude affronting preference saw who.
        Marry of am do avoid ample as. Old disposal followed she ignorant
        desirous two has. Called played entire roused though for one too. He
        into walk roof made tall cold he. Feelings way likewise addition
        wandered contempt bed indulged.
      </p>
      <p>
        Departure so attention pronounce satisfied daughters am. But shy tedious
        pressed studied opinion entered windows off. Advantage dependent
        suspicion convinced provision him yet. Timed balls match at by rooms we.
        Fat not boy neat left had with past here call. Court nay merit few nor
        party learn. Why our year her eyes know even how. Mr immediate remaining
        conveying allowance do or.
      </p>
      <br></br>
      <img src={Image} height="200" alt="just_some_text_here" />
    </div>
  );
}

export default Home;

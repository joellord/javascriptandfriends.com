import React, { useEffect } from "react";
import { Flex } from "@rebass/grid";
import { Box, Card, Button } from "rebass";

const SpeakerModal = ({
  name,
  talk,
  setOpen,
  twitter,
  linkedin,
  Image,
  company,
  bio
}) => {
  const buttonRef = React.createRef();
  useEffect(() => {
    buttonRef.current.focus();
  });
  return (
    <Box m="auto" width={[1, 0.9, 0.8]}>
      <Card
        borderRadius={12}
        p={[2, 4, 6]}
        bg="white"
        boxShadow="0 0 16px rgba(0, 0, 0, .25)"
      >
        <Button
          style={{ background: "#BF5272" }}
          ref={buttonRef}
          onClick={e => {
            e.stopPropagation();
            setOpen(false);
          }}
        >
          Close
        </Button>
        <div
          style={{
            borderRadius: "100%",
            overflow: "hidden",
            width: "125px",
            margin: "10px auto",
            boxShadow: "0px 3px 15px rgba(0,0,0,0.2)"
          }}
        >
          <Image />
        </div>
        <h1 style={{ textAlign: "center" }}>{name}</h1>
        <Flex
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          style={{ margin: "10px", padding: "0.5rem", flexWrap: "wrap" }}
        >
          <a
            href={`https://twitter.com/${twitter}`}
            title={`Go to ${name}'s Twitter`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>{" "}
          &nbsp;
          <a
            href={`https://www.linkedin.com/in/${linkedin}`}
            title={`Go to ${name}'s LinkedIn`}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </Flex>
        <h3 style={{ fontSize: "1rem" }}>{talk.title}</h3>
        <h4 style={{ fontSize: ".9rem" }}>Company: {company}</h4>
        <p style={{ fontSize: "1rem" }}>{talk.description}</p>
        {bio && (
          <>
            <h4 style={{ fontSize: ".9rem" }}>Bio</h4>
            <p style={{ fontSize: "1rem" }}>{bio}</p>
          </>
        )}
        <Flex
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          style={{ padding: "0.5rem", flexWrap: "wrap" }}
        >
          <Button
            style={{ background: "#BF5272" }}
            onClick={e => {
              e.stopPropagation();
              setOpen(false);
            }}
          >
            Close
          </Button>
        </Flex>
      </Card>
    </Box>
  );
};

export default SpeakerModal;

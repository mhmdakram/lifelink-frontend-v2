import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export const EmailTemplate = ({
  UserName,
  Email,
  Time,
  Date,
  doctor,
  Note,
}) => (
  <Html>
    <Head />
    <Preview>Book Your Favorite Doctor</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`https://lifelink-frontend-v2.vercel.app/logo.svg`}
          width="170"
          height="50"
          alt="Lifelink"
          style={logo}
        />
        <Text style={paragraph}>Hi,</Text>
        <Text style={paragraph}>
          Your Appointment with Doctor has been booked.
        </Text>
        {/* <Section style={btnContainer}>
            <Button style={button} href="https://getkoala.com">
              Get started
            </Button>
          </Section> */}
        <Text style={paragraph}>
          Best,
          <br />
          Lifelink
        </Text>
        <Hr style={hr} />
        <Text style={footer}>Developed by Lifelink</Text>
      </Container>
    </Body>
  </Html>
);

export default EmailTemplate;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center",
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};

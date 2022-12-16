import { Button, Grid } from '@nextui-org/react';
import { Container, Card, Row, Text, Navbar, Col} from "@nextui-org/react";

import Head from 'next/head'

export default function Home() {
  return (
      <Container css={{"width": "100%"}}>
      <Head>
        <title>WeSleep</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {/* NavBar */}
      <Navbar isCompact variant={"static"}>
        <Navbar.Brand>
          <Text b color={"inherit"}>
          WeSleep
          </Text>
        </Navbar.Brand>
        <Navbar.Content>
          <Navbar.Link href="#">
            Contact
          </Navbar.Link>
          <Navbar.Link href="#">
          About
          </Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
        </Navbar.Content>

        <Navbar.Content>
          <Navbar.Item>
            <Button auto flat href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>

    {/* Jumbotron */}

    <Grid.Container justify="center" css={{"height": "500px", "backgroundImage": "url(https://littlevisuals.co/images/i.o.jpg)"}}>
      <Grid xs={12} sm={4} alignItems="center">
          <Col>
            <Text weight={"bold"} size={50} color={"primary"} css={{"textAlign": "center"}} shadow>
              Join The Movement To The Brighter Side
            </Text>
            <Button size="sm" css={{"width": "100%", "padding": "20px"}}>
              Join Now!
            </Button>
          </Col>
      </Grid>
    </Grid.Container>


    {/* Product */}

    <Grid.Container gap={2}>
      <Grid xs={12} sm={3}>
        <Card>
        <Card.Header css={{'top': 5}}>
          <Col>
            <Text size={12} weight={'bold'} transform={'uppercase'}>COURSE</Text>
            <Text h4 weight={'bold'} transform={'uppercase'}>CRAB MOVEMENT 1.0</Text>
          </Col>
        </Card.Header>
        <Card.Image src={"https://littlevisuals.co/images/red_dawn.jpg"}></Card.Image>
        <Card.Footer 
        isBlurred
        css={{
          position: "absolute",
          bgBlur: "#0f111466",
          bottom: 0
        }}
        >
          <Row>
            <Col>
              <Text color="#d1d1d1" size={18}>
                200k Students
              </Text>
            </Col>
            <Col>
              <Row justify="flex-end">
                <Button flat auto rounded color="primary">
                  <Text>
                    Enroll Now
                  </Text>
                </Button>
              </Row>
            </Col>
          </Row>
        </Card.Footer>
        </Card>
      </Grid>

      <Grid xs={12} sm={3}>

      <Card>
        <Card.Header css={{'top': 5}}>
          <Col>
            <Text size={12} weight={'bold'} transform={'uppercase'}>COURSE</Text>
            <Text h4 weight={'bold'} transform={'uppercase'}>CRAB MOVEMENT 1.0</Text>
          </Col>
        </Card.Header>
        <Card.Image src={"https://littlevisuals.co/images/red_dawn.jpg"}></Card.Image>
        <Card.Footer 
        isBlurred
        css={{
          position: "absolute",
          bgBlur: "#0f111466",
          bottom: 0
        }}
        >
          <Row>
            <Col>
              <Text color="#d1d1d1" size={18}>
                200k Students
              </Text>
            </Col>
            <Col>
              <Row justify="flex-end">
                <Button flat auto rounded color="primary">
                  <Text>
                    Enroll Now
                  </Text>
                </Button>
              </Row>
            </Col>
          </Row>
        </Card.Footer>
        </Card>
      </Grid>

      <Grid xs={12} sm={3}>

      <Card>
        <Card.Header css={{'top': 5}}>
          <Col>
            <Text size={12} weight={'bold'} transform={'uppercase'}>COURSE</Text>
            <Text h4 weight={'bold'} transform={'uppercase'}>CRAB MOVEMENT 1.0</Text>
          </Col>
        </Card.Header>
        <Card.Image src={"https://littlevisuals.co/images/red_dawn.jpg"}></Card.Image>
        <Card.Footer 
        isBlurred
        css={{
          position: "absolute",
          bgBlur: "#0f111466",
          bottom: 0
        }}
        >
          <Row>
            <Col>
              <Text color="#d1d1d1" size={18}>
                200k Students
              </Text>
            </Col>
            <Col>
              <Row justify="flex-end">
                <Button flat auto rounded color="primary">
                  <Text>
                    Enroll Now
                  </Text>
                </Button>
              </Row>
            </Col>
          </Row>
        </Card.Footer>
        </Card>
      </Grid>

      <Grid xs={12} sm={3}>

      <Card>
        <Card.Header css={{'top': 5}}>
          <Col>
            <Text size={12} weight={'bold'} transform={'uppercase'}>COURSE</Text>
            <Text h4 weight={'bold'} transform={'uppercase'}>CRAB MOVEMENT 1.0</Text>
          </Col>
        </Card.Header>
        <Card.Image src={"https://littlevisuals.co/images/red_dawn.jpg"}></Card.Image>
        <Card.Footer 
        isBlurred
        css={{
          position: "absolute",
          bgBlur: "#0f111466",
          bottom: 0
        }}
        >
          <Row>
            <Col>
              <Text color="#d1d1d1" size={18}>
                200k Students
              </Text>
            </Col>
            <Col>
              <Row justify="flex-end">
                <Button flat auto rounded color="primary">
                  <Text>
                    Enroll Now
                  </Text>
                </Button>
              </Row>
            </Col>
          </Row>
        </Card.Footer>
        </Card>
      </Grid>


    </Grid.Container>

      </Container>
  )
}

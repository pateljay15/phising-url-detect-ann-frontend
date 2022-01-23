import React, { useState } from 'react';
import { CardTitle,
        CardText,
    Button,
    Card,    
    FormGroup,
    Label,
    Input,
    Form
} from "reactstrap"
import axios from "axios"



function Main() {
    const [url, setUrl] = useState("")
    const [predResult, setPredResult] = useState(null)

    const predictUrl = (e) => {
        e.preventDefault()
        if(url == "") {
            console.log("input require")
        } else {
            console.log(url)
            const predObj = {
                url: url
            }

            axios.post("https://phising-url-ann-model.herokuapp.com/url/", predObj)
            .then(res => {
                console.log(res)
                setPredResult(res.data.pred)
            })
            .catch(err => {
                console.log(err)
            })
        }
    }

  return <div>
      <div>
        <Card
            body
            inverse
            style={{
            backgroundColor: '#333',
            borderColor: '#333',
            marginTop: "40px",
            marginLeft: "30px",
            marginRight: "30px"
            }}
        >
            <CardTitle tag="h5">
            Phising URL Detection using Artificial Neural Network(ANN) Model
            </CardTitle>
            <CardText>
            This model is predicting with accuracy of 84%.
            </CardText>
            <Form>
                <FormGroup>
                    <Label
                    for="exampleEmail"
                    hidden
                    >
                    Email
                    </Label>
                    <Input
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    id="exampleEmail"
                    name="email"
                    placeholder="Predict URL here"
                    type="email"
                    />
                </FormGroup>
                {' '}
                {' '}
                <Button onClick={predictUrl}>
                    Predict
                </Button>
                <br/>
                <br/>
                <h2>Prediction Result :</h2>
                {predResult != null ? (
                    <>
                        {predResult == 1 ? (
                            <>
                                <h2 style={{color: "red"}}>Malicious URL</h2>
                            </>
                        ) : (
                            <>
                                <h2 style={{color: "green"}}>Beignant URL</h2>
                            </>
                        )}
                    </>
                ) : (
                    <></>
                )} 
                </Form>
        </Card>
        </div>
  </div>;
}

export default Main;

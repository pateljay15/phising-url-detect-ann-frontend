import React, { useState } from 'react';
import axios from "axios"
import "../css/style.css"
import "../css/utilities.css"

function Home() {
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
      <section class="showcase">
        <div class="container grid">
            <div class="showcase-text">
                <h1>Easier Prediction of URL</h1>
                <p>This web app used Artificial Neural Network(ANN) Model under the hood to predict any URL whether it is safe to browse or it's phising URL.</p>
                <a href="features.html" class="btn btn-outline">Read More</a>
            </div>

            <div class="showcase-form card">
                <h2>Let's Predict</h2>
                 <form>
                    <div class="form-control">
                        {/* <input type="text" name="name" placeholder="Name" required /> */}
                        <input
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        name="text"
                        placeholder="Predict URL here"
                        type="text"
                        required
                        />
                    </div>
                    <button className='btn btn-primary' onClick={predictUrl}>
                        Predict
                    </button>
                </form>
                <h2>Prediction Result :</h2>
                {predResult != null ? (
                    <>
                        {predResult == 1 ? (
                            <>
                                <h2 style={{color: "red"}}>Malicious URL</h2>
                            </>
                        ) : (
                            <>
                                <h2 style={{color: "green"}}>Benignant URL</h2>
                            </>
                        )}
                    </>
                ) : (
                    <></>
                )} 
            </div>
        </div>
    </section>
  </div>;
}

export default Home;

import React from 'react';

const sumStyle = {
    fontFamily: "'Shantell Sans', cursive",
    color: "#fff",
    marginLeft: "10vw",
    paddingTop: "10vh",
    fontSize: "6vw"
}

function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    // fetch('/some-api', { method: form.method, body: formData });

    // Or you can work with it as a plain object: 
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
}

function Summary() {
    return(
        <div className="summary">
                <h1 style={sumStyle}>Summary...</h1>

                <form method="post" onSubmit={handleSubmit}>
                <button className="submitBtn" type="submit">Summarize</button>
                <label style={{color: "#fff", float: "right", marginRight: "10vw"}}>
                    <textarea
                    name="postContent"
                    defaultValue="Your Text Here"
                    rows={18}
                    cols={70}
                    />
                </label>
                <hr />
                
                </form>
        </div>
    );
}

export default Summary;
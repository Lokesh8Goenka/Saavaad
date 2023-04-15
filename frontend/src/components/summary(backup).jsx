<form onSubmit={handleSubmit}>
<div className="row">
  <div className="col">
    <label htmlFor="text-input"></label>
    <textarea 
      className="scroll"
      style={{ overflow: "scroll" }}
      type="text"
      cols="100"
      rows="10"
      id="text-input"
      value={inputText}
      onChange={handleChange}
    />
    <h5 style={{ color: "#13183e" }}>
      Total Words:
      <CountUp start={0} end={inlength} duration={3} />
    </h5>
  </div>

  {twocols ? (
    <div className="col">
      <output
        style={{
          color: "Black",
          backgroundColor: "white",
          width: "300px",
          height: "260px"
        }}
      >
        {resultText}
      </output>
      {resCount ? (
        <h5 style={{ color: "#13183e" }}>
          Total Words:
          <CountUp start={0} end={outlength} duration={3} />
        </h5>
      ) : null}
    </div>
  ) : (
    <div className="col" hidden>
      <output
        style={{
          color: "Black",
          backgroundColor: "white",
          width: "300px",
          height: "260px"
        }}
      >
        {resultText}
      </output>
      {resCount ? (
        <h5 style={{ color: "#13183e" }}>
          Total Words:
          <CountUp start={0} end={outlength} duration={3} />
        </h5>
      ) : null}
    </div>
  )}
</div>
<div className="row">
  <div className="col">
    <button
      className={isActive ? "submitBtn" : "submitBtnDisable"}
      disabled={disable}
      type="submit"
    >
      {btntext}
    </button>
    <br />
    <br />
  </div>
  {/* <div className="col">
    <button
      className={isActive ? "submitBtn" : "submitBtnDisable"}
      disabled={disable}
      type="submit"
      style={{fontSize:"25px"}}
      onClick={handleSumAudio}
    >
      Audio
    </button>
    <br />
    <br />
  </div>
  <div className="col">
    <ReactAudioPlayer
      src={audio}
      autoPlay
      controls
    />
  </div>
  <div className="col">
    <button
      className={isActive ? "submitBtn" : "submitBtnDisable"}
      disabled={disable}
      type="submit"
      style={{fontSize:"25px"}}
      onClick={handleSumTrans}
    >
      Translate
    </button>
    <br />
    <br />
  </div>
  <div className="col">
  <output
        style={{
          color: "Black",
          backgroundColor: "white",
          width: "300px",
          height: "260px"
        }}
      >
        {result2Text}
      </output>
  </div> */}
</div>
</form> :
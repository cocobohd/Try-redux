

export default function MoreInfo(prop) {

  return(
    <div>
      <h1 className="more--info--title">
          More info about {prop.name}
      </h1>
      <div className="more--info--div">
        <div className="more--info--information">
          <p>
            In stock: {prop.count}
          </p>
          <p>
            Width: {prop.width} 
          </p>
          <p>
            Height: {prop.heigth}
          </p>
          <p>
            Weight: {prop.weight} 
          </p>
          <button>Edit</button>
        </div>
        <div className="more--info--comments">
          <p>
            Comments:
          </p>
          <p>
            Leave comment?
          </p>
          <textarea type="textarea"/>
          <button >Send!</button>
        </div>
      </div> 
    </div>
  )
} 
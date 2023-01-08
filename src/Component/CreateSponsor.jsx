import React from "react";

const CreateSponsor = (props) => { 


    return(

          <div className="forms">
            
            <nav className="myNav">
                    <img src="../images/monkey.png" alt="monkey logo"/>
                 </nav>

             <div className="form--box">

              <h2>Sponsor detaljer</h2>

               <div className="box--dec">

              <form className="add" >
                <label for="sponImg">sponImg:</label>
                <input type="text" name="sponImg" required></input>
                <label for="titel">titel:</label>
                <input type="text" name="titel" required></input>
                <label for="description">description:</label>
                <input type="text" name="description" required></input>
                
                <button type="submit">Tilføj en ny Sponsor</button>

              </form>

             <form className="delete">
              <label for="id">Sponsor id:</label>
              <input type="text" name="id" required/>

                 <button type="submit">Slet sponsor</button>

            </form>

            </div>
            </div>
              
          </div>
    )

}

export default CreateSponsor;
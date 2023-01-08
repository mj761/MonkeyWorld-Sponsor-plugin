import React from "react";
import { useNavigate } from "react-router-dom";


 const Info = (props) => {
        const navigate = useNavigate();
       

    return(

       <div className="container--info">
                 <nav className="myNav">
                    <img src="../images/monkey.png" alt="monkey logo"/>
                 </nav>
                     <div className="banner">
                        <div className="banner--text">
                           <button onClick={() => navigate(-1)} className="button">tilbage</button>
                            <h1 className="titel--info">Vores Sponsorer</h1>
                              
                         </div>
                     </div>

              <div className="sponsor--pers">
                  <img src="../images/ullerodpizzalogo.png" alt=" pizza logo" />
                  <div className="sponsor--text">
                  <h3>Ullerød Pizza</h3>
                  <p>Ullerød Pizza's sponsorship har hjulpet en af vores aber med at sikre sig at den har det liv den fortjener.
                    Vi ønsker kun det bedste for vores dyr, og vi sætter så stor pris på at folk ønsker og hjælpe os med at opnå det.
                  </p>
                  </div>

              </div>
              <div className="sponsor--terms2">
                  <div className="sponsor--text">
                  <h3>Workshop.dk</h3>
                  <p>
                    Det som det vil sige og være sponsor for Monkey World, er at i er med til at sørger for at parken kan 
                    være i den bedste stand for både dyr som gæster. Vi går meget op i at skabe de bedste omgivelser, og sørger 
                    for at dyrene har det super. 
                    Vi har stadig meget brug for jeres bidrag, men arbejder hårdt for at gøre stedet det bedste det kan være.
                  </p>
                  </div>
                  <img src="../images/surikat.jpg" alt="monkeyworld surikat img" />

              </div>

              <div className="sponsor--pers">
                  <img src="../images/selskovlogo.png" alt=" selskov logo" className="logo" />
                  <div className="sponsor--text">
                  <h3>Selskov Electric</h3>
                  <p>Ullerød Pizza's sponsorship har hjulpet en af vores aber med at sikre sig at den har det liv den fortjener.
                    Vi ønsker kun det bedste for vores dyr, og vi sætter så stor pris på at folk ønsker og hjælpe os med at opnå det.
                  </p>
                  </div>

              </div>



              <div className="sponsor--terms">
                  <div className="sponsor--text">
                  <h3>Sponsor hos os</h3>
                  <p>
                    Det som det vil sige og være sponsor for Monkey World, er at i er med til at sørger for at parken kan 
                    være i den bedste stand for både dyr som gæster. Vi går meget op i at skabe de bedste omgivelser, og sørger 
                    for at dyrene har det super. 
                    Vi har stadig meget brug for jeres bidrag, men arbejder hårdt for at gøre stedet det bedste det kan være.
                  </p>
                    <h4>Vilkår og betingelser</h4>
                  <p>
                  Du bliver opkrævet det beløb, du har bidraget til. Atleten/holdet repræsenteret af en manageren af indsamlingen modtager dit bidrag uanset om det samlede indsamlingmål er nået, og du modtager din belønning. Dette er manageren af indsamlingens ansvar.
                  Ved at støtte en indsamling accepterer du vilkårene for udbyderen af betalingstjenester.
                  Du anerkender risikoen for at støtte en indsamlingen, hvad angår ændringer og forsinkelser. Leverandøren er ikke ansvarlig for disse faktorer, heller ikke afslutningen af indsamlingen. Dette ansvar tilhører manageren af indsamlingen. Leverandøren er ikke ansvarlig for manageren af indsamlingen overholder lovgivningen vedrørende gevinster og andre ydelser. Leverandøren vil ikke blive involveret i om sådanne omstændigheder.
                  Du skal angive en email og postadresse for at få en belønning afleveret. Kun manageren af indsamlingen kontakter dig om sagen.
                  I tilfælde af mistanke om misbrug af betalingskort eller andre betalingstyper skal du straks kontakte udbyder af betalingstjeneste eller kortudsteder. Leverandøren er ikke ansvarlig for misbrug og vil ikke blive involveret i sådanne tilfælde.
                  Leverandøren forbeholder sig retten til at beslutte, hvilke bidrag der er godkendt og til at slette eller afbryde bidrag til enhver tid.
                  </p>
                  </div>
                  <img src="../images/dennis.png" alt="monkeyworld img" />


              </div>
              <div class="button--cont">
              <button className="button"><a href="./CreateSponsor" className="link">Ansøg som sponsor</a></button>
              </div>


            </div>   

    )
}

export default Info;
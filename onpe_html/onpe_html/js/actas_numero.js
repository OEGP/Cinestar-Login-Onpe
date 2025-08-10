const getActas = async () => {
    const id = (new URLSearchParams( window.location.search )).get('id')
    const data = await fetch(`https://oaemdl.es/onpe_sweb_php/actas/numero/${id}`)
  
        html1=` 
                   <form id="myform" name="myform" class="horizontal-form" method="post" action="javascript:actas_bscarPrNmroMesa(document.getElementById('myform'));">
                    <div class="col-md-3">
                      INGRESE EL NÚMERO DE ACTA:
                    </div>

                    <div class="col-md-4">
                      <div class="form-group">
                        <span id="spanNroMesa">
                          <input id="nroMesa" name="nroMesa" type="text" onkeypress="return validText(this, event, 4)" maxlength="6" class="form-control" value="">
                        </span>
                      </div>
                    </div>

                    <div class="col-md-2">
                      <button type="button"  onclick="buscarActa()" class="btn btn-primary"><span class="glyphicon glyphicon-search" aria-hidden="true"></span> BUSCAR</button>
                    </div>
                  </form><br>
                 
        `
    if ( data.status == 200 ) {
        const resultado = await data.json()
        const actas = resultado.data;   
        html =` 
                <br></br>
                <div class="row">

                      <div class="tab-info">EL NÚMERO DE MESA QUE HA INGRESADO NO EXISTE</div>

                      <div class="tab-content">
                        <div id="detMesa">
                          <div class="tab-content">
                            <div role="tabpanel" class="tab-pane active" id="presidencial">
                              <div class="tab-info-desc">

                                <div class="row">

                                  <div class="col-xs-3 col-md-4">
                                    <div class="mesap01">
                                        <img src="images/mp-sin.jpg" class="img-responsive">
                                        Si requiere la imagen del acta, solicítela a través del procedimiento de acceso a la información pública.
                                    </div>
                                  </div>

                                  <div class="col-xs-9 col-md-8">
                                    <div class="row">

                                      <div class="col-xs-12">
                                        <p class="subtitle1">ACTA ELECTORAL</p>
                                        <div id="page-wrap">
                                          <table class="table13" cellspacing="0">
                                            <thead>
                                              <tr>
                                                <th>Mesa N°</th>
                                                <th>N° Copia</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td>${actas.idGrupoVotacion}</td>
                                                <td>${actas.nCopia}</td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>

                                      <div class="col-xs-12">
                                        <p class="subtitle1">INFORMACIÓN UBIGEO</p>
                                        <div id="page-wrap">
                                          <table class="table14" cellspacing="0">
                                            <tbody>
                                              <tr class="titulo_tabla">
                                                <td>Departamento</td>
                                                <td>Provincia</td>
                                                <td>Distrito</td>
                                                <td>Local de votación</td>
                                                <td>Dirección</td>
                                              </tr>
                                              <tr>
                                                <td>${actas.Departamento}</td>
                                                <td>${actas.Provincia}</td>
                                                <td>${actas.Distrito}</td>
                                                <td>${actas.idLocalVotacion}</td>
                                                <td>${actas.Direccion}</td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>

                                      <div class="col-xs-12">
                                        <p class="subtitle1">INFORMACIÓN MESA</p>
                                        <div id="page-wrap">
                                          <table class="table15" cellspacing="0">
                                            <tbody>
                                              <tr class="titulo_tabla">
                                                <td>Electores hábiles</td>
                                                <td>Total votantes</td>
                                                <td>Estado del acta</td>
                                              </tr>
                                              <tr>
                                                <td>${actas.ElectoresHabiles}</td>
                                                <td>${actas.TotalVotantes}</td>
                                                <td>ACTA ELECTORAL NORMAL</td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>

                                    </div>

                                  </div>
                                </div>

                                <div>
                                  <div class="col-xs-12 pbot30_acta">
                                    <p class="subtitle1">LISTA DE RESOLUCIONES</p>
                                    <span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span> No hay resoluciones para el acta seleccionada
                                    <div id="page-wrap">
                                        <div class="col-md-12 resolu"></div>
                                    </div>
                                    <!-- <p class="centro"># : El valor consignado en el acta presenta ilegibilidad.</p> -->
                                  </div>
                                </div>

                                <div>
                                  <div class="col-xs-12">
                                    <p class="subtitle1">INFORMACIÓN DEL ACTA ELECTORAL</p>
                                    <div id="page-wrap" class="cont-tabla1">
                                      <table class="table06">
                                        <tbody>
                                          <tr class="titulo_tabla">
                                            <td colspan="2">Organización política</td>
                                            <td>Total de Votos</td>
                                          </tr>
                                          <tr>
                                            <td>PERUANOS POR EL KAMBIO</td>
                                            <td><img width="40px" height="40px" src="images/simbolo_pkk.jpg"></td>
                                            <td>${actas.P1}</td>
                                          </tr>
                                          <tr>
                                            <td>FUERZA POPULAR</td>
                                            <td><img width="40px" height="40px" src="images/simbolo_keyko.jpg"></td>
                                            <td>${actas.P2}</td>
                                          </tr>
                                          <tr>
                                            <td colspan="2">VOTOS EN BLANCO</td>
                                            <td>${actas.VotosBlancos}</td>
                                          </tr>
                                          <tr>
                                            <td colspan="2">VOTOS NULOS</td>
                                            <td>${actas.VotosNulos}</td>
                                          </tr>
                                          <tr>
                                            <td colspan="2">VOTOS IMPUGNADOS</td>
                                            <td>${actas.VotosImpugnados}</td>
                                          </tr>
                                          <tr>
                                            <td colspan="2">TOTAL DE  VOTOS EMITIDOS</td>
                                            <td>${actas.TotalVotantes}</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>

                                </div>

                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
            `
        
            document.getElementById("contenido-resultados").innerHTML = html;
            document.getElementById("page-wrap").innerHTML = html1; 
    }
}

function buscarActa() {
    const nroMesa = document.getElementById("nroMesa").value.trim();
    if (nroMesa) 
        window.location.href = "actas_numero.html?id=" + encodeURIComponent(nroMesa);
   
}


getActas()
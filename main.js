function moyenneCC(){

   HG1 = document.getElementById('HG1').value;
   
   HG2 = document.getElementById('HG2').value;

   ES1 = document.getElementById('ES1').value;
   ES2 = document.getElementById('ES2').value;

   A1 = document.getElementById('A1').value;
   A2 = document.getElementById('A2').value;

   E1 = document.getElementById('E1').value;
   E2 = document.getElementById('E2').value;

    EPS = document.getElementById('EPS').value;

    EMC = document.getElementById('EMC').value;

    spé1 = document.getElementById('spé1').value;

    M1 = document.getElementById('M1').value;

    moy = parseFloat(HG1)*3.3 + parseFloat(HG2)*3 + parseFloat(ES1)*2.5 + parseFloat(ES2)*2.5 + parseFloat(A1)*3.3+ parseFloat(A2)*3 + parseFloat(E1)*3.3 + parseFloat(E2)*3 + parseFloat(EPS)*5 + parseFloat(EMC) + parseFloat(spé1) *5 + parseFloat(M1)*5
console.log(moy)
    
     moy20 = moy/39.9;
    document.getElementById("résultatCC").innerHTML =   moy20.toFixed(3) ;
    return moy20.toFixed(3);

}

function moyenneE(){
    FR1 = document.getElementById('FR1').value;
    FR2 = document.getElementById('FR2').value;

    PHILO = document.getElementById('PHILO1').value;
    GO1 = document.getElementById('GO1').value;

    SPE2 = document.getElementById('SPE2').value;
    SPE3 = document.getElementById('SPE3').value;

    moy = 5*parseFloat(FR1)+5*parseFloat(FR2)+8*parseFloat(PHILO)+10*parseFloat(GO1) +16*parseFloat(SPE2)+16*parseFloat(SPE3); 
    moy = moy/60;

    document.getElementById("résultatE").innerHTML =   moy.toFixed(3) ;
    return moy.toFixed(3);

}

function moyenneBAC(){
    moy = 60*moyenneE()+ 40*moyenneCC();
    moy = moy/100;

    if (moy < 10) {
        document.getElementById("mention").innerHTML = " pas de bac "
        document.getElementById("mention").style.background = "red";
    }

    if (  moy >= 10 && moy <= 12) {
        document.getElementById("mention").innerHTML = " pas de mention";
        document.getElementById("mention").style.background = "orange";

    }

    if (moy > 12 && moy <= 14 ) {
        document.getElementById("mention").innerHTML = " mention assez bien";
        document.getElementById("mention").style.background = "yellow";
    }
    if (moy > 14 && moy <= 16    ) {
        document.getElementById("mention").innerHTML = " mention  bien";
        document.getElementById("mention").style.background = " Bright Green ";
    }

    if (moy > 16) {

        document.getElementById("mention").innerHTML = " mention très bien";
        document.getElementById("mention").style.background = "  Green ";
    }

    document.getElementById("NB").innerHTML = "Note du bac :" + moy.toFixed(3);

}

// This would be the JS for the calculator, but still needs some adjustemnts

function calculateSTO() {
  // Get input values
  const mvalue = parseFloat(document.getElementById("market-value").value);
  const debt = parseFloat(document.getElementById("debt").value);
  const costsSTO = 0.05;



  //  STO Calculation with the 80% Self claim
  const selfClaim = mvalue - debt * 0.8;
  const minusSTO = selfClaim - costsSTO;
  const interestToInvestors = minusSTO * 0.0175;


  // Calculate after 1 year and 5 years for issuer
  const after1Year = (selfClaim - interestToInvestors).toFixed(2);
  const after5Years = (after1Year * 5).toFixed(2);

  // Display the results
  const resultContainer = document.getElementById("result-container");
  const resultAfter1Year = document.getElementById("result-after1Year");
  const resultAfter5Years = document.getElementById("result-after5Years");

  // Populate the result paragraphs
  resultAfter1Year.textContent = `After 1 year you as a owner earn: $${after1Year}`;
  resultAfter5Years.textContent = `After 5 years you as a owner earn: $${after5Years}`;

  // Show the result container
  resultContainer.style.display = "block";
  resultContainer.style.width = "300px";
}

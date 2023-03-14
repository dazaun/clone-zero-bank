
// Show transaction
// Savings
const accountId1 = 
`<table class="table table-condensed table-hover">
<thead>
  <tr>
    <th>Date</th>
    <th>Description</th>
    <th>Deposit</th>
    <th>Withdrawal</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>2012-09-06</td>
    <td>ONLINE TRANSFER REF #UKKSDRQG6L</td>
    <td>984.3</td>
    <td></td>
  </tr>
  <tr>
    <td>2012-09-05</td>
    <td>OFFICE SUPPLY</td>
    <td></td>
    <td>50</td>
  </tr>
  <tr>
    <td>2012-09-01</td>
    <td>ONLINE TRANSFER REF #UKKSDRQG6L</td>
    <td>1000</td>
    <td></td>
  </tr>
</tbody>
</table>`

// Checking
const accountId2 = 
`<table class="table table-condensed table-hover">
<thead>
  <tr>
    <th>Date</th>
    <th>Description</th>
    <th>Deposit</th>
    <th>Withdrawal</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>2012-09-06</td>
    <td>CHECK DEPOSIT</td>
    <td>186.7</td>
    <td></td>
  </tr>
  <tr>
    <td>2012-09-05</td>
    <td>TELECOM</td>
    <td></td>
    <td>99.6</td>
  </tr>
  <tr>
    <td>2012-09-01</td>
    <td>CAR PAYMENT</td>
    <td></td>
    <td>1548</td>
  </tr>
</tbody>
</table>
`
// Savings
const accountId3 =`
<table class="table table-condensed table-hover">
<thead>
  <tr>
    <th>Date</th>
    <th>Description</th>
    <th>Deposit</th>
    <th>Withdrawal</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>2012-09-06</td>
    <td>ONLINE TRANSFER REF #IGREKLVC0D</td>
    <td>636.4</td>
    <td></td>
  </tr>
  <tr>
    <td>2012-09-05</td>
    <td>ONLINE TRANSFER REF #IGREKLVC0D</td>
    <td>55.9</td>
    <td></td>
  </tr>
  <tr>
    <td>2012-09-01</td>
    <td>PAYCHECK</td>
    <td></td>
    <td>1173.1</td>
  </tr>
</tbody>
</table>`

// Loan
const accountId4 =`
<table class="table table-condensed table-hover">
<thead>
  <tr>
    <th>Date</th>
    <th>Description</th>
    <th>Deposit</th>
    <th>Withdrawal</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>2012-09-05</td>
    <td>RENT</td>
    <td></td>
    <td>770</td>
  </tr>
  <tr>
    <td>2012-09-01</td>
    <td>RENT</td>
    <td></td>
    <td>2000</td>
  </tr>
</tbody>
</table>`

// Credit card
const accountId5 =`
<div class="well">
No results.
</div>`

// Brokerage
const accountId6 =`
<div class="well">
No results.
</div>`

// Find Transactions
const resultFindTransaction = `
<div class="well">
No results.
</div>

<!--
For debugging purposes only!

Transaction filter was:
description - 
-->

<script type="text/javascript">
$(function () {
    /*Description - */
    console.log('');
});
</script>
`

const isNoAccountId = window.location.search == ''
let search = window.location.search.replaceAll('?accountId=','')

const changeContent = (search = "1") => {

  let content
  switch(search){
    case "1":
      content = accountId1;
      break;
    case "2":
      content = accountId2;
      break;
    case "3":
      content = accountId3;
      break;
    case "4":
      content = accountId4;
      break;
    case "5":
      content = accountId5;
      break;
    case "6":
      content = accountId6;
      break;
    default:
      content = accountId1;  
    }
  
    document.querySelectorAll('#aa_accountId option').forEach((el, id)=>{
      if( (id+1) == search) {
       el.selected = true
      }      
    })
  
  const infoBlock = document.querySelector('#all_transactions_for_account')
  infoBlock.replaceChildren('')
  infoBlock.insertAdjacentHTML("afterbegin", content)
}


const changeSelectHandler = (e) => changeContent(e.target.value)

changeContent(search)
document.querySelector("#aa_accountId").addEventListener('change', changeSelectHandler)

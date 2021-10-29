function AllData(){
    const ctx = React.useContext(UserContext);
    return(
        <Card
        bgcolor="info"
        txtcolor="light"
        header="All data"
        title="All data"
        text={JSON.stringify(ctx)}
        body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
      />    
    );
}




//         <>
//         <h1>AllData Component</h1>
//         {JSON.stringify(ctx)}
//         </>
//     )
// }

// function Home(){
//     return (
//       <Card
//         bgcolor="info"
//         txtcolor="light"
//         header="BadBank"
//         title="Welcome to the bank"
//         text="You can move around using the navigation bar."
//         body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
//       />    
//     );  
//   }
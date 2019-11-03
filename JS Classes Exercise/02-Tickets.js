function sortTickets(tickets,sortCriteria){
  
    class Ticket{
        constructor(destination,price,status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
      

    }
    let collection = [];

    tickets.forEach(ticket => {
        ticket = ticket.split("|");
        let t = new Ticket(ticket[0],Number(ticket[1]),ticket[2]);
        collection.push(t);
    });
   if(sortCriteria === "price"){
      return collection.sort((a,b)=>a.sortCriteria-b.sortCriteria);
    }  
    else{
       return collection.sort((a,b)=>a[sortCriteria].localeCompare(b[sortCriteria]));
    }
}
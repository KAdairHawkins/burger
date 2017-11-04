var connection = require('./connection.js');

module.exports = {
  selectAll: function(){
    connection.query("SELECT * FROM burger", function(err, res) {
      console.log(res);

  });
},
  insertOne: function(name, devoured){
    connection.query("INSERT into burger (name, devoured) values (?,?)", [name, devoured], function(err, res){
      console.log(res);
    })
  },
  updateOne: function(){
    connection.query("UPDATE burger SET ? WHERE ?", function(err,res){
      console.log(res);
  });
}
}

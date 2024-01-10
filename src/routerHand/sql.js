
const mysql=require('mysql')
const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Lyb15260072876',
        database: 'flowmeter_database'
 });

 connection.connect((error) => {
    if (error) {
      console.error('Failed to connect to MySQL: ', error);
      return;
    }
    console.log('Connected to MySQL!');
  });

export function select(){
    return new Promise((reslove,reject) =>{
        const sql='select id,project_name,username,flowmeter_type,installation_number,contact_people,telephone from project_information_table';
        connection.query(sql, function(error, results, fields) {
            if (error) {
              reject(error);
              return;
            }
            reslove(results)
          });
          connection.end();
      });
  }

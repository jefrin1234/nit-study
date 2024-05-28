


const peoples = [
  { name: "Alice Johnson", email: "alice.johnson@example.com", phone: "123-456-7890" },
  { name: "Bob Smith", email: "bob.smith@example.com", phone: "234-567-8901" },
  { name: "Carol Williams", email: "carol.williams@example.com", phone: "345-678-9012" },
  { name: "David Brown", email: "david.brown@example.com", phone: "456-789-0123" },
  { name: "Eve Davis", email: "eve.davis@example.com", phone: "567-890-1234" },
  { name: "Frank Miller", email: "frank.miller@example.com", phone: "678-901-2345" },
  { name: "Grace Wilson", email: "grace.wilson@example.com", phone: "789-012-3456" },
  { name: "Hank Moore", email: "hank.moore@example.com", phone: "890-123-4567" },
  { name: "Ivy Taylor", email: "ivy.taylor@example.com", phone: "901-234-5678" },
  { name: "Jack Anderson", email: "jack.anderson@example.com", phone: "012-345-6789" },
  { name: "Kathy Thomas", email: "kathy.thomas@example.com", phone: "123-456-7891" },
  { name: "Leo Jackson", email: "leo.jackson@example.com", phone: "234-567-8902" },
  { name: "Mia White", email: "mia.white@example.com", phone: "345-678-9013" },
  { name: "Nate Harris", email: "nate.harris@example.com", phone: "456-789-0124" },
  { name: "Olivia Martin", email: "olivia.martin@example.com", phone: "567-890-1235" },
  { name: "Paul Thompson", email: "paul.thompson@example.com", phone: "678-901-2346" },
  { name: "Quinn Garcia", email: "quinn.garcia@example.com", phone: "789-012-3457" },
  { name: "Rose Martinez", email: "rose.martinez@example.com", phone: "890-123-4568" },
  { name: "Sam Clark", email: "sam.clark@example.com", phone: "901-234-5679" },
  { name: "Tina Lewis", email: "tina.lewis@example.com", phone: "012-345-6780" }
];



function App() {

 

  return (
    <>

      {
        peoples.map(
          (person) => (
             <>
            <li>{person.name}</li>
            <li>{person.email}</li>
            <li>{person.phone}</li>
            </>
          )
        )
      }

    </>
  )
}

export default App







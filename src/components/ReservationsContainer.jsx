import React, {useState} from 'react';
import {  Box, Select, FormControl, FormLabel, Input, Button, Heading }  from '@chakra-ui/react';
//import ApplicationsTable from './ApplicationsTable.jsx';
//import AddReservationForm from './AddReservationForm.jsx';

//This container holds all state bc dashboard and form need to share this state

const ReservationsContainer = (props) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [partySize, setPartySize] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    
    const white = {
        backgroundColor: 'rgba(255, 255, 255, .95)',
          } 
        
          const handleName = (e) => {
              setName(e.target.value);
            }
            const handleEmail = (e) => {
                setEmail(e.target.value);
            }
            const handlePartySize = (e) => {
                setPartySize(e.target.value);
            }
            const handleDate = (e) => {
                setDate(e.target.value);
            }
            
            const handleTime = (e) => {
                setTime(e.target.value);
        }
        
        const submitData = (e) => {
            fetch('/reservation', {
                method: 'POST',
                headers: {'content-type':'application/json'},
                body: JSON.stringify({
                  name, email, party_size, date, time
                })
            })
            e.preventDefault();
        }
            return (
                 
                 <Box maxHeight='100%'  alignItems="center" borderWidth={1} px={4} width='100%' maxWidth='500px' borderRadius={4} textAlign='center' boxShadow='lg' style={white}>
                  <Heading my={8}>Reserve a Table</Heading>
                              
                <Box my={8} mx={8} textAlign='center' textAlign="center"  >
                  <form id='sign-up-form' onSubmit = {submitData} >
                    <FormControl >
                      <FormLabel>Name: </FormLabel>
                      <Input name="name" placeholder="Enter Customer Name" value={name} onChange={handleName}/>
                      <FormLabel> Email: </FormLabel>
                      <Input name="email" placeholder="Enter Customer Email" value={email} onChange={handleEmail}/>
                      <FormLabel>Party Size: </FormLabel>
                      <Select name="partySize" placeholder="How Many People?" value={partySize} onChange={handlePartySize} 
                      >
                        <option value={1}> 1</option>
                        <option value={2}> 2</option>
                        <option value={3}> 3</option>
                        <option value={4}> 4</option>

                      </Select>
                      <FormLabel>Date: </FormLabel>
                      <Input name="email" placeholder="Enter your email address" value={date} onChange={handleDate}/>
                      <FormLabel>Time: </FormLabel>
                      <Input name="password" placeholder="Available Times" value={time} onChange={handleTime}/>
                    </FormControl>
                    <Button justifyContent='center' my={5} type="submit" form="sign-up-form" backgroundColor='green'color="white">Reserve</Button>
                  </form>
                </Box>
                </Box>
                
              )
}


export default ReservationsContainer;

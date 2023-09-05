import React from 'react'
import Linkimage from './Linkimage';
import creditcards from './image/creditcards.png';
import homeloans from './image/homeloans.png';
import healthinsurance from './image/healthinsurance.png';
import carinsurance from './image/carinsurance.png';
import highinterestsavings from './image/highinterestsavings.png';
import electricityandgas from './image/electricityandgas.png';
import personalloans from './image/personalloans.png';
import mobileplans from './image/mobileplans.png';
import broadband from './image/broadband.png';
import superfunds from './image/superfunds.png';
import sharetrading from './image/sharetrading.png';
import lifeinsurance from './image/lifeinsurance.png';
import homeinsurance from './image/homeinsurance.png';
import travelinsurance from './image/travelinsurance.png';
import traveldeals from './image/traveldeals.png';
import crypto from './image/crypto.png';
import carloans from './image/carloans.png';
import petinsurance from './image/petinsurance.png';
import transactionaccounts from './image/transactionaccounts.png';
import moneytransfer from './image/moneytransfer.png';
import shoopingdeals from './image/shoopingdeals.png';
import streaming from './image/streaming.png';
import businessinsurance from './image/businessinsurance.png';
import shorttermloans from './image/shorttermloans.png';

export default function Wszystkieopcje({czyrozwinac}) {
  return (
    <div> 
        {czyrozwinac==='show less ˄'
        ?<div>
            <div className='zdjeciawrzedzie'>
                <Linkimage tekst={<img class="imagelogo" src={creditcards} alt='creditcard'/>}/>
                <Linkimage tekst={<img class="imagelogo" src={homeloans} alt='homeloans'/>}/>
                <Linkimage tekst={<img class="imagelogo" src={healthinsurance} alt='zhealthinsurance'/>}/>
                <Linkimage tekst={<img class="imagelogo" src={carinsurance} alt='carinsurance'/>}/>
                <Linkimage tekst={<img class="imagelogo" src={highinterestsavings} alt='highinterestsavings'/>}/>
                <Linkimage tekst={<img class="imagelogo" src={electricityandgas} alt='electricityandgas'/>}/>
            </div>
            <div className='zdjeciawrzedzie'>
            <Linkimage tekst={<img class="imagelogo" src={personalloans} alt='personalloans'/ >}/>
            <Linkimage tekst={<img class="imagelogo" src={mobileplans} alt='mobileplans'/>}/>
            <Linkimage tekst={<img class="imagelogo" src={broadband} alt='broadband'/>}/>
            <Linkimage tekst={<img class="imagelogo" src={superfunds} alt='superfunds'/ >}/>
                <Linkimage tekst={<img class="imagelogo" src={sharetrading} alt='sharetrading'/>}/>
                <Linkimage tekst={<img class="imagelogo" src={lifeinsurance} alt='lifeinsurance'/>}/>
            </div>
            <div className='zdjeciawrzedzie'>
            <Linkimage tekst={<img class="imagelogo" src={homeinsurance} alt='homeinsurance'/ >}/>
            <Linkimage tekst={<img class="imagelogo" src={travelinsurance} alt='travelinsurance'/>}/>
            <Linkimage tekst={<img class="imagelogo" src={traveldeals} alt='traveldeals'/>}/>
            <Linkimage tekst={<img class="imagelogo" src={crypto} alt='crypto'/ >}/>
                <Linkimage tekst={<img class="imagelogo" src={carloans} alt='carloans'/>}/>
                <Linkimage tekst={<img class="imagelogo" src={petinsurance} alt='petinsurance'/>}/>
            </div>
            <div className='zdjeciawrzedzie'>
            <Linkimage tekst={<img class="imagelogo" src={transactionaccounts} alt='transactionaccounts'/ >}/>
            <Linkimage tekst={<img class="imagelogo" src={moneytransfer} alt='moneytransfer'/>}/>
            <Linkimage tekst={<img class="imagelogo" src={shoopingdeals} alt='shoopingdeals'/>}/>
            <Linkimage tekst={<img class="imagelogo" src={streaming} alt='streaming'/ >}/>
                <Linkimage tekst={<img class="imagelogo" src={businessinsurance} alt='businessinsurance'/>}/>
                <Linkimage tekst={<img class="imagelogo" src={shorttermloans} alt='shorttermloans'/>}/>
            </div>
        </div>
        :<div className='zdjeciawrzedzie'>
          <Linkimage tekst={<img class="imagelogo" src={creditcards} alt='creditcard'/>}/>
          <Linkimage tekst={<img class="imagelogo" src={homeloans} alt='homeloans'/>}/>
          <Linkimage tekst={<img class="imagelogo" src={healthinsurance} alt='healthinsurance'/>}/>
          <Linkimage tekst={<img class="imagelogo" src={carinsurance} alt='carinsurance'/ >}/>
                <Linkimage tekst={<img class="imagelogo" src={highinterestsavings} alt='highinterestsavings'/>}/>
                <Linkimage tekst={<img class="imagelogo" src={electricityandgas} alt='electricityandgas'/>}/>
        </div>
        }
    </div>
  )
}

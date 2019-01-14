import { Component } from '@angular/core';
import { Ihome } from './home_model';

@Component({
    //selector:'app-home',
    templateUrl:'home.component.html'
})

export class HomeComponent{

    filteredText:string
 home:Ihome[]=
 
 [
    {
        'name' : 'My experiments with Truth',
        'author':'M.K.Gandhi ',
        'price':145,
        'release_date':'06/01/1986'
    },
    {
        'name' : 'The Merchant of venice',
        'author':'William shakespeare',
        'price':543,
        'release_date':'8/20/1956'
    }, 
    {
        'name' : 'A Tale of Two Cities',
        'author':'Charles Dickens ',
        'price':64,
        'release_date':'11/6/2010'
    }, 
    {
        'name' : 'Origin of species ',
        'author':' charles Darwin ',
        'price':283,
        'release_date':'12/28/2006'
    }, 
    {
        'name' : 'Time Machine ',
        'author':'H.G. Wells ',
        'price':12,
        'release_date':'1/28/1846'
    }, 
    {
        'name' : 'Mein Kampf ',
        'author':' Adolf Hitler ',
        'price':384,
        'release_date':'7/7/2018'
    }, 
    {
        'name' : 'Invisible Man ',
        'author':'H.G. Wells',
        'price':123,
        'release_date':'2/12/1999'
    }
 ];
}
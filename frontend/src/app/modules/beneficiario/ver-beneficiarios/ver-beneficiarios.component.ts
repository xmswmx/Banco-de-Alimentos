import { Component, OnInit } from '@angular/core';
import { Beneficiario } from '../../../_services/lbservice/models'; 
import { BeneficiarioApi } from '../../../_services/lbservice/services';
import { LoopBackConfig, LoggerService } from '../../../_services/lbservice';

@Component({
  selector: 'app-ver-beneficiarios',
  templateUrl: './ver-beneficiarios.component.html',
  styleUrls: ['./ver-beneficiarios.component.css']
})
export class VerBeneficiariosComponent implements OnInit {

  constructor(private beneficiarioApi:BeneficiarioApi, private log: LoggerService) { 
	LoopBackConfig.setDebugMode(false);
    this.log.info('Component is loaded')
  }
  
  beneficiarios : Beneficiario[];

  ngOnInit() {
	  this.beneficiarioApi.find().subscribe((res:Beneficiario[])=>{this.beneficiarios=res})
  }

}

import { Component, OnInit } from '@angular/core';

// Models
import { SecondHeaderModel } from 'src/app/data/models/local/inputsModels';

// Importación de constantes, utilidades y DTO's
import { PROJECTS, INPUTS } from 'src/app/portal/utils/textConstantsES';
import { GeneralStructsService } from 'src/app/data/dto/general-structs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-proyecto',
  templateUrl: './detalles-proyecto.component.html',
  styleUrls: ['./detalles-proyecto.component.scss']
})
export class DetallesProyectoComponent implements OnInit {
  public headerData: SecondHeaderModel;
  
  // Textos
  private textES = PROJECTS.SUBMENU;

  constructor(private dto: GeneralStructsService, private route: ActivatedRoute) {
    this.headerData = dto.createSecondStructHeader(
      this.textES.TITLE_DETAIL,
      true,
      true,
      this.textES.ROUTE_PROJECTS,
      this.textES.CLIENT,
      this.route.snapshot.paramMap.get('client'),
      this.textES.PROJECT,
      this.route.snapshot.paramMap.get('project'),
      this.textES.TOTAL_HOURS,
      '350',
      INPUTS.SEARCH
    );
  }

  ngOnInit(): void {
    
  }
}

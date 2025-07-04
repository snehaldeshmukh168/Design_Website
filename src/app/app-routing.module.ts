import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { ManufacturingautomationComponent } from './manufacturingautomation/manufacturingautomation.component';
import { FabricationstructuralComponent } from './fabricationstructural/fabricationstructural.component';
import { CadreverseengineeringComponent } from './cadreverseengineering/cadreverseengineering.component';
import { PlccontrolpanelComponent } from './plccontrolpanel/plccontrolpanel.component';
import { JigsfixturesComponent } from './jigsfixtures/jigsfixtures.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'jigs-fixture', component: JigsfixturesComponent },
  { path: 'manufacturing-automation', component: ManufacturingautomationComponent },
  { path: 'fabrication-structural', component: FabricationstructuralComponent },
  { path: 'cad-reverse-engineering', component: CadreverseengineeringComponent },
  { path: 'plc-control-panel', component: PlccontrolpanelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Project } from '../project';
import { ProjectService } from '../project.service';

import { SessionService } from '../../shared/session.service';
import { SearchTriggerService } from '../../base/global-search/search-trigger.service';
import { CommonRoutes, ListMode } from '../../shared/shared.const';
import { AppConfigService } from '../../app-config.service';

import { State } from 'clarity-angular';

@Component({
  selector: 'list-project',
  templateUrl: 'list-project.component.html'
})
export class ListProjectComponent implements OnInit {

  @Input() projects: Project[];


  @Input() totalPage: number;
  @Input() totalRecordCount: number;
  pageOffset: number = 1;

  @Output() paginate = new EventEmitter<State>();

  @Output() toggle = new EventEmitter<Project>();
  @Output() delete = new EventEmitter<Project>();

  @Input() mode: string = ListMode.FULL;

  constructor(
    private session: SessionService,
    private router: Router,
    private searchTrigger: SearchTriggerService,
    private appConfigService: AppConfigService) { }

  ngOnInit(): void {
  }

  public get listFullMode(): boolean {
    return this.mode === ListMode.FULL;
  }

  goToLink(proId: number): void {
    this.searchTrigger.closeSearch(false);

    let linkUrl = ['harbor', 'projects', proId, 'repository'];
    if (!this.session.getCurrentUser()) {
      let navigatorExtra: NavigationExtras = {
        queryParams: { "redirect_url": linkUrl.join("/") }
      };

      if (this.appConfigService.isIntegrationMode()) {
        this.router.navigate([CommonRoutes.EMBEDDED_SIGN_IN], navigatorExtra);
      } else {
        this.router.navigate([CommonRoutes.SIGN_IN], navigatorExtra);
      }
    } else {
      this.router.navigate(linkUrl);

    }
  }

  refresh(state: State) {
    this.paginate.emit(state);
  }

  toggleProject(p: Project) {
    this.toggle.emit(p);
  }

  deleteProject(p: Project) {
    this.delete.emit(p);
  }

}
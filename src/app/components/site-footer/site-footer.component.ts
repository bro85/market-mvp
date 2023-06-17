import {Component, ElementRef, OnInit, ViewChild, HostListener, AfterViewInit, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.component.html',
  styleUrls: ['./site-footer.component.scss']
})
export class SiteFooterComponent implements OnInit, AfterViewInit {

  public year = 0;
  public footerHeight: string = '0px';
  @ViewChild('siteFooter') siteFooter: ElementRef<HTMLInputElement> | undefined;

  constructor(private _changeDetectorRef: ChangeDetectorRef) {
    this.year = new Date().getFullYear();
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.footerHeight = this.siteFooter?.nativeElement.offsetHeight + 'px';
    this._changeDetectorRef.detectChanges(); // For the fixing Error: NG0100
  }

  @HostListener('window:load')
  onLoad() {
    this.footerHeight = this.siteFooter?.nativeElement.offsetHeight + 'px';
  }

  @HostListener('window:resize')
  onResize() {
    this.footerHeight = this.siteFooter?.nativeElement.offsetHeight + 'px';
  }

}

import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  MonacoEditorLanguageClientWrapper,
  UserConfig,
} from 'monaco-editor-wrapper';
import { lsConfig } from './config/ls.config';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-web-editor';

  @ViewChild('editor')
  editorElement!: ElementRef;

  async ngAfterViewInit(): Promise<void> {
    const wrapper = new MonacoEditorLanguageClientWrapper();
    try {
      await wrapper.dispose();
      await wrapper.initAndStart(lsConfig, this.editorElement.nativeElement);
    } catch (e) {
      console.error(e);
    }
  }
}

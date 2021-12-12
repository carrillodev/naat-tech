import { Directive, Output, HostListener, EventEmitter, Host } from '@angular/core';

@Directive({
  selector: '[appDragAndDropZone]'
})
export class DragAndDropZoneDirective {
  @Output() private uploadedFiles: EventEmitter<File>

  constructor() { }

  @HostListener('dragover', ['$event']) public onDragOver(event: any) {
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(event: any) {
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('drop', ['$event']) public onDrop(event: any) {
    event.preventDefault();
    const file = event.dataTransfer.files;
    if(file.length > 0) {
      this.uploadedFiles.emit(file);
    }
  }

}

import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragDropToListComponent } from './drag-drop-to-list.component';

describe('DragDropToListComponent', () => {
  let component: DragDropToListComponent;
  let fixture: ComponentFixture<DragDropToListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DragDropToListComponent],
      imports: [DragDropModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDropToListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

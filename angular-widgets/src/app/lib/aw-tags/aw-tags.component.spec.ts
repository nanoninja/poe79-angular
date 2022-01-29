import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AwTagsComponent } from './aw-tags.component';

describe('AwTagsComponent', () => {
  let component: AwTagsComponent;
  let fixture: ComponentFixture<AwTagsComponent>;
  let tags: string[] = [];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AwTagsComponent],
      imports: [BrowserAnimationsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwTagsComponent);
    component = fixture.componentInstance;
    tags = ['tag 1', 'tag 2', 'tag 3', 'tag 4', 'tag 5'];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not have any tags', () => {
    expect(component.tags.length).toEqual(0);
  });

  it('should input empty', () => {
    const input: DebugElement = fixture.debugElement.query(By.css('.tags__input'));
    expect(input).toBeTruthy();

    input.nativeElement.value = '';
    input.triggerEventHandler('keyup.enter', { target: input.nativeElement });

    fixture.detectChanges();
    fixture.componentInstance.add(new Event('keyup.enter'));

    expect(component.tags.length).toEqual(0);
  });

  it('should add tag', () => {
    const input: DebugElement = fixture.debugElement.query(By.css('.tags__input'));
    expect(input).toBeTruthy();

    tags.forEach((tag: string) => {
      input.nativeElement.value = tag;
      input.triggerEventHandler('keyup.enter', { target: input.nativeElement });

      fixture.detectChanges();
      fixture.componentInstance.add(new Event('keyup.enter'));

      expect(component.tags).toContain(tag);
      expect(input.nativeElement.value).toEqual('');
    });

    expect(component.tags).toEqual(tags);
    expect(component.tags.length).toEqual(tags.length);
  });

  it('should remove tag', () => {
    component.tags = tags;
    fixture.detectChanges();

    const spans: DebugElement[] = fixture.debugElement.queryAll(By.css('.tags__close'));

    expect(spans).toBeTruthy();
    expect(component.tags).toEqual(tags);

    spans.forEach((span: DebugElement) => {
      span.triggerEventHandler('click', { target: span.nativeElement });
      span.nativeElement.click();

      fixture.detectChanges();
    });

    expect(component.tags.length).toEqual(0);
  });

});

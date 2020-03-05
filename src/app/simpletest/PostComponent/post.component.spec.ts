import { PostComponent, Post } from "./post.component"
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { Component } from '@angular/compiler/src/core';
import { By } from '@angular/platform-browser';


describe('Post Component', () => {

  let component: PostComponent;
  beforeAll(() => {
    // arrange

  });

  afterAll(() => {
    component = null;
  });

  beforeEach(() => {
    component = new PostComponent();
    component.totalLikes = 3;
  });



  it('should increase likes', () => {
    //act
    component.like();
    //assert
    expect(component.totalLikes).toBe(4)
  });

  it('should decrease likes', () => {
    component.dislike();
    expect(component.totalLikes).toBe(2);
  });

  it('should decrease likes only if the total like is not 0', () => {
    component.totalLikes = 0;
    component.dislike();
    expect(component.totalLikes).toBe(0);
  });


});

describe('Integration Tests : Post Component', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [PostComponent]
    }).compileComponents();
  });

  beforeEach(()=>{
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should Create', () => {
    expect(component).toBeTruthy();
  });

  it('Should Display Global total likes', () => {
    let debugElement= fixture.debugElement.query(By.css('.globalTotalLikes'));
    let el: HTMLElement = debugElement.nativeElement;

    expect(el.innerText).toContain('4');
  })
});

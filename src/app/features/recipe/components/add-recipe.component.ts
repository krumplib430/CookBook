import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AngularFireDatabase} from 'angularfire2/database';
import {AuthService} from '../../auth/services/auth';
import * as firebase from 'firebase';

// Refactor the this thing redux implementation
@Component({
  selector: 'cb-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {
  form: FormGroup;
  selectedFiles: FileList;
  uploadProgress: number;
  uploadFileName: string;

  // currentUpload: Upload;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private afDatabase: AngularFireDatabase, private router: Router) {
    this.createForm();
  }

  get formIngredients() {
    return <FormArray>this.form.get('ingredients');
  }

  get formSteps() {
    return <FormArray>this.form.get('steps');
  }

  ngOnInit() {
  }

  createForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['https://firebasestorage.googleapis.com/v0/b/cookbook-222b6.appspot.com/o/generic_food3.jpg?alt=media&token=bbef0e6b-cae3-4d7d-80b7-ba32d11290cb'],
      ingredients: this.formBuilder.array([]),
      steps: this.formBuilder.array([]),
      shared: [false]
    });
  }

  addIngredient(): void {
    const items = this.form.get('ingredients') as FormArray;
    items.push(new FormControl('', Validators.required));
  }

  removeIngredient(index) {
    const items = this.form.get('ingredients') as FormArray;
    items.removeAt(index);
  }

  addStep(): void {
    const items = this.form.get('steps') as FormArray;
    items.push(new FormControl('', Validators.required));
  }

  removeStep(index) {
    const items = this.form.get('steps') as FormArray;
    items.removeAt(index);
  }

  submit() {
    if (this.form.valid) {
      const url = 'users/' + this.authService.userData.uid + '/recipes';
      const itemsRef = this.afDatabase.list(url);
      itemsRef.push(this.form.value).then(() => this.router.navigate(['/my-recipes']));
    }
  }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }

  uploadImage() {
    const file = this.selectedFiles.item(0);
    this.uploadFileName = file.name;


    const storageRef = firebase.storage().ref();
    const uniqueId = 'img-' + Math.random().toString(36).substr(2, 16);
    const uploadTask = storageRef.child(`${'uploads'}/${uniqueId}`).put(file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot: firebase.storage.UploadTaskSnapshot) => {
        // upload in progress
        // const snap = snapshot;
        this.uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        // upload failed
        console.log(error);
      },
      () => {
        // upload success
        if (uploadTask.snapshot.downloadURL) {
          this.form.get('imageUrl').setValue(uploadTask.snapshot.downloadURL);
          this.uploadFileName = file.name;
          return;
        } else {
          console.error('No download URL!');
        }
      },
    );
  }
}

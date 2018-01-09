import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AngularFireDatabase} from 'angularfire2/database';
import {AuthService} from '../../auth/services/auth';
import * as firebase from 'firebase';


export class Upload {
  $key: string;
  file: File;
  name: string;
  url: string;
  progress: number;
  createdAt: Date = new Date();

  constructor(file: File) {
    this.file = file;
  }
}


@Component({
  selector: 'cb-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {
  form: FormGroup;
  selectedFiles: FileList;
  currentUpload: Upload;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private afDatabase: AngularFireDatabase) {
    this.createForm();
  }

  get formIngredients() { return <FormArray>this.form.get('ingredients'); }
  get formSteps() { return <FormArray>this.form.get('steps'); }

  ngOnInit() {
  }

  createForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: [''],
      ingredients: this.formBuilder.array([]),
      steps: this.formBuilder.array([]),
      shared: [false]
    });
  }

  addIngredient(): void {
    const items = this.form.get('ingredients') as FormArray;
    items.push(new FormControl('', Validators.required));
  }

  addStep(): void {
    const items = this.form.get('steps') as FormArray;
    items.push(new FormControl('', Validators.required));
  }

  submit() {
    if (this.form.valid) {
      const url = 'users/' + this.authService.userData.uid + '/recipes';
      const itemsRef = this.afDatabase.list(url);
      itemsRef.push(this.form.value);
    }
  }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }

  uploadImage() {
    const file = this.selectedFiles.item(0)
    this.currentUpload = new Upload(file);


    const storageRef = firebase.storage().ref();
    const uniqueId = 'img-' + Math.random().toString(36).substr(2, 16);
    const uploadTask = storageRef.child(`${'uploads'}/${uniqueId}`).put(file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot: firebase.storage.UploadTaskSnapshot) => {
        // upload in progress
        const snap = snapshot;
        this.currentUpload.progress = (snap.bytesTransferred / snap.totalBytes) * 100;
      },
      (error) => {
        // upload failed
        console.log(error);
      },
      () => {
        // upload success
        if (uploadTask.snapshot.downloadURL) {
          this.form.get('imageUrl').setValue(uploadTask.snapshot.downloadURL);
          this.currentUpload.url = uploadTask.snapshot.downloadURL;
          this.currentUpload.name = this.currentUpload.file.name;
          console.log(this.currentUpload);
          // this.saveFileData(upload);
          return;
        } else {
          console.error('No download URL!');
        }
      },
    );
  }
}

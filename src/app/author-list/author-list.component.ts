import {Component} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent {
  constructor(private toastr: ToastrService) {
  }

  authors = [
    {
      id: 1,
      name: 'Fyodor Dostoevsky',
      bornYear: 1821,
      dieYear: 1881,
      imdbPath: 'https://www.imdb.com/name/nm0234502/bio?ref_=nm_ov_bio_sm',
      imgPath: 'https://m.media-amazon.com/images/M/MV5BNjI0M2QzNjAtM2EwNy00YTk5LThjMjktMTc4ODhmYTk2NjhlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTc4MzI2NQ@@._V1_UY209_CR89,0,140,209_AL_.jpg',
      about: 'Fyodor Mikhailovich Dostoevsky was born on November 11, 1821, in Moscow, Russia. He was the second of seven children of Mikhail Andreevich and Maria Dostoevsky.'
    },
    {
      id: 2,
      name: 'Dante Alighieri',
      bornYear: 1265,
      dieYear: 1321,
      imdbPath: 'https://www.imdb.com/name/nm0019604/bio?ref_=nm_ov_bio_sm',
      imgPath: 'https://m.media-amazon.com/images/M/MV5BM2M3YTYxZDgtNmZmMy00MmViLThlZjAtZDAxM2E1ODQ1NWY1XkEyXkFqcGdeQXVyMTc4MzI2NQ@@._V1_UX214_CR0,0,214,317_AL_.jpg',
      about: 'Dante Alighieri was born in 1265 into the lower nobility of Florence nobility , to Alighiero nobility di Bellincione d\'Alighiero, a moneylender. A precocious student.'
    },
    {
      id: 3,
      name: 'Leo Tolstoy',
      bornYear: 1828,
      dieYear: 1910,
      imdbPath: 'https://www.imdb.com/name/nm0866243/bio?ref_=nm_ov_bio_sm',
      imgPath: 'https://m.media-amazon.com/images/M/MV5BNzFmNDE0NGMtMDYzZS00ZjgxLWE0ZjEtYTNmYzZjYzE2MmM0L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTc4MzI2NQ@@._V1_UY317_CR83,0,214,317_AL_.jpg',
      about: 'Count Lev Nikolaevich Tolstoy was born on September 9, 1828, in his ancestral ancestral estate Yasnaya Polyana, South of Moscow,  Russia. He was the fourth of five children.'
    },
    {
      id: 4,
      name: 'Victor Hugo',
      bornYear: 1802,
      dieYear: 1885,
      imdbPath: 'https://www.imdb.com/name/nm0401076/bio?ref_=nm_ov_bio_sm',
      imgPath: 'https://m.media-amazon.com/images/M/MV5BYjMzYWYwZjMtMmNjYi00OTMyLTg2NmUtNWJmZjQzZGQwMjdhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTc4MzI2NQ@@._V1_UY317_CR3,0,214,317_AL_.jpg',
      about: 'Although Hugo was fascinated by poems from childhood on, he spent some time dedicated on the polytechnic university of Paris until he dedicated all his work to literature.'
    },
    {
      id: 5,
      name: 'William Shakespeare',
      bornYear: 1564,
      dieYear: 1616,
      imdbPath: 'https://www.imdb.com/name/nm0000636/bio?ref_=nm_ov_bio_sm',
      imgPath: 'https://m.media-amazon.com/images/M/MV5BMTg5ODgyNDgyNF5BMl5BanBnXkFtZTcwMjEwNTgxOA@@._V1_UY317_CR6,0,214,317_AL_.jpg',
      about: 'William Shakespeare\'s birthdate is assumed from his baptism on April 25. His father John was the son of a farmer who became a tradesman; his mother Mary Arden was gentry.'
    },
    {
      id: 6,
      name: 'Alexander Pushkin',
      bornYear: 1799,
      dieYear: 1837,
      imdbPath: 'https://www.imdb.com/name/nm0701090/bio?ref_=nm_ov_bio_sm',
      imgPath: 'https://m.media-amazon.com/images/M/MV5BYzY4NDA3NjMtNjg4Yi00YzFmLWJmOTgtNWUzY2U2YzU5NDgzL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjIxMzMyMQ@@._V1_UY317_CR22,0,214,317_AL_.jpg',
      about: 'Born to noble parents (his father Sergei was a retired major, and his mother, Nadezhda, was the granddaughter of an ennobled Ethiopian general) on the 26th of May, 1799.'
    }
  ];
  userFilter: any = { name: '' };

  removeAuthor(id) {
    this.authors = this.authors.filter(author => author.id !== id);
  }

  setNewInfo(newInfo) {
    console.log(newInfo)
    this.authors.forEach((a, b) => {
      if (a.id === newInfo.id) {
        try {
          if (newInfo.name === '' || newInfo.about === '') {
            throw new Error('empty');
          }
          this.authors[b] = newInfo;
          this.toastr.info(`New information was saved.`, `${newInfo.name}`);
        } catch (e) {
          if (e.message) {
            this.toastr.error('Please fill all input\s.', 'Input\'s are required.');
          }
        }
      }
    });
  }

  openCreateModal() {
    alert('create modal')
  }

  searchAuthor(e) {
    // console.log(e.target.value)

    console.log(this.authors)
  }
}

```cpp
/**
 * Author: Leon Wasiliew
 * Student W#: W0496661
 * Class: PROG2100 - Programming C++
 * Start Date: 2025-12-03
 * Last Update: 2025-12-07
 * File Name: Book.cpp
 * Description: C++ implementation file for the Book class used in the Library Management System.
 * Provides common attributes and polymorphic methods for EBook, ReferenceBook, and RegularBook.
 * Includes encapsulated accessors and virtual methods for displaying and identifying book types.
 */

// User-defined Header File
#include "../../include/models/Book.h"
		
/**
 * Parameterized Constructor:
 * --------------------------
 * Constructs a Book object with the book ID, ISBN, title, author, genre, published date, and publisher details.
 * Uses initializer list to initialize attributes.
 */
Book::Book(int bookId, const std::string &isbn, const std::string &title, const std::string &author, const std::string &genre, const std::string &publishedDate, const std::string &publisherDetails)
	: bookId(bookId), isbn(isbn), title(title), author(author), genre(genre), publishedDate(publishedDate), publisherDetails(publisherDetails) {}

/**
 * Destructor:
 * -----------
 * Destructs a Book object when it goes out of scope.
 * Enables polymorphic cleanup in derived classes.
 * Debug message commented out for developer use.
 */
Book::~Book() {
	// std::cout << "Book object deleted." << std::endl;
};

// Encapsulation: Getters

// Returns the book ID of the Book
int Book::getId() const {
	return bookId;
}

// Returns the ISBN of the Book
std::string Book::getIsbn() const {
	return isbn;
}

// Returns the title of the Book
std::string Book::getTitle() const {
	return title;
}

// Returns the author of the Book
std::string Book::getAuthor() const {
	return author;
}

// Returns the genre of the Book
std::string Book::getGenre() const {
    return genre;
}

// Returns the published date of the Book
std::string Book::getPublishedDate() const {
	return publishedDate;
}

// Returns the publisher details of the Book
std::string Book::getPublisherDetails() const {
	return publisherDetails;
}

// Encapsulation: Setters

// Sets the book ID for the Book
void Book::setId(int bookId) {
	this->bookId = bookId;
}

// Sets the ISBN for the Book
void Book::setIsbn(const std::string &isbn) {
 this->isbn = isbn;
}

// Sets the title for the Book
void Book::setTitle(const std::string &title) {
    this->title = title;
}

// Sets the author for the Book
void Book::setAuthor(const std::string &author) {
    this->author = author;
}

// Sets the genre for the Book
void Book::setGenre(const std::string &genre) {
    this->genre = genre;
}

// Sets the published date for the Book
void Book::setPublishedDate(const std::string &publishedDate) {
    this->publishedDate = publishedDate;
}

// Sets the publisher details for the Book
void Book::setPublisherDetails(const std::string &publisherDetails) {
    this->publisherDetails = publisherDetails;
}
```
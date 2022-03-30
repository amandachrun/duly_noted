package main

import (
	"html/template"

	"log"

	"net/http"
)

func homePage(w http.ResponseWriter, r *http.Request) {

	renderTemplate(w, "static/index.html")

}

func main() {

	http.HandleFunc("/", homePage)

	log.Println("Starting web server on port 8000")

	http.ListenAndServe(":8000", nil)

}

func renderTemplate(w http.ResponseWriter, page string) {

	t, err := template.ParseFiles(page)

	if err != nil {

		log.Println(err)

		return

	}

	err = t.Execute(w, nil)

	if err != nil {

		log.Println(err)

		return

	}

}

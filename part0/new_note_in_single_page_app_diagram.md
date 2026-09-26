# 0.6: New note in Single page app diagram

```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: The user writes text and clicks Save

    Note right of browser: The event handler prevents the default form action (preventDefault)
    Note right of browser: The JS creates a note object, adds it to the local list and rerenders the notes (the page is NOT reloaded)

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa (data: {content, date})
    activate server
    Note right of server: The server saves the new note
    server-->>browser: 201 Created
    deactivate server
```
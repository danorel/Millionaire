package middleware

import "net/http"

type ResponseHeader struct {
	handler http.Handler
	headerName string
	headerValue string
}

//NewResponseHeader constructs a new ResponseHeader middleware handler
func NewResponseHeader(handlerToWrap http.Handler, headerName string, headerValue string) *ResponseHeader {
	return &ResponseHeader{handlerToWrap, headerName, headerValue}
}

//ServeHTTP handles the request by adding the response header
func (rh *ResponseHeader) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	// Add the header
	w.Header().Add(rh.headerName, rh.headerValue)
	// Call the wrapped handler
	rh.handler.ServeHTTP(w, r)
}
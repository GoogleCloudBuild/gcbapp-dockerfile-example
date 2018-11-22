package main

import "testing"

func TestStr(t *testing.T) {
	if str() != "Hello World" {
		t.Error("must Hello World. ", str())
	}
}
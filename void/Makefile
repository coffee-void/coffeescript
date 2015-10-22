.PHONY : clone
clone:
	git clone https://github.com/jashkenas/coffeescript.git _sandbox
	cd _sandbox && npm install
	$(MAKE) reset

.PHONY : reset
reset:
	cp -R -f _sandbox/ sandbox/

.PHONY : void
void:
	node steps/run first
	cd sandbox && bin/cake build && bin/cake build:parser
	node steps/run second
	cd sandbox && bin/cake build

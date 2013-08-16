/** 
 * Creates a new queue. A queue is a first-in-first-out (FIFO) data structure -
 * items are added to the end of the queue and removed from the front.
 */
var Queue = (function () {
	"use strict";
	
	/**
	 * @constructor
	 * The Queue Class
	 */
	function Queue() {
		this.head    = null;
		this.tail    = null;
		this.current = null;
		this.length  = 0;
	}
	
	Queue.prototype = {
		/**
		 * Enqueues the given item
		 * @param {*} item
		 */
		enqueue: function (item) {
			var node = {
				data: item,
				next: null
			};
			
			if (!this.head) {
				this.head = node;
				this.tail = node;
			} else {
				this.tail.next = node;
				this.tail = node;
			}
			this.length += 1;
		},
	
		/**
		 * Dequeues and returns the first item in the Queue. If the Queue is empty it returns null.
		 * @return {?*}
		 */
		dequeue: function () {
			if (this.head) {
				var aux = this.head;
				this.head = this.head.next;
				this.length -= 1;
				return aux.data;
			}
			return null;
		},
			
		/**
		 * Returns the first element of the queue or null if the Queue is empty
		 * @return {?*}
		 */
		first: function () {
			return this.head ? this.head.data : null;
		},
		
		/**
		 * Returns the last element of the queue or null if the Queue is empty
		 * @return {?*}
		 */
		last: function () {
			return this.tail ? this.tail.data : null;
		},
		
		
		/**
		 * Returns true if the queue is empty, and false otherwise
		 * @return {boolean}
		 */
		isEmpty: function () {
			return !this.head;
		},
		
		/**
		 * Returns the size of the queue
		 * @return {number}
		 */
		size: function () {
			return this.length;
		},
		
		
		/**
		 * Starts the iterator at the head of the queue
		 */
		iterate: function () {
			this.current = this.head;
		},
		
		/**
		 * Moves the iterator to the next element
		 */
		next: function () {
			if (this.current) {
				this.current = this.current.next;
			}
		},
		
		/**
		 * Returns the current element of the Queue or null if there isn't one
		 */
		item: function () {
			return this.current ? this.current.data : null;
		},
		
		/**
		 * Returns true if there are more elements after the current one
		 * @return {boolean}
		 */
		hasNext: function () {
			return !!this.current;
		}
	};
	
	return Queue;
}());
# AVIV technical test solution - TypeScript Serverless Backend


## Notes

Time spent: 1.5 hours.

1. Created new table `listing_prices` to store price history for all listings.

2. Added `getListingPrices` handler used to fetch Listing Price History.
`GET {{applicationURI}}/listings/{id}/prices`
```json5
[
    {
        "price_eur": 100000,
        "created_date": "2025-01-17T19:20:52.798Z",
        "listing_id": 10
    },
    {
        "price_eur": 150000,
        "created_date": "2025-01-17T19:21:03.545Z",
        "listing_id": 10
    },
    {
        "price_eur": 200000,
        "created_date": "2025-01-17T19:21:07.683Z",
        "listing_id": 10
    }
]
```
3. Added `insertListingPrice` function. This is used for inserting new price entries.
4. Implemented `insertListingPrice` as part of `addListing` and `updateListing` handlers so that we can start creating price entries whenever a Listing is created or updated.
5. Updated the `listingapi.yaml` file to reflect all the new changes.
6. Removed any mock data and tested all endpoints to make sure that creating and retrieving price history works.

## Questions

This section contains additional questions your expected to answer before the debrief interview.

- **What is missing with your implementation to go to production?**

Nothing

- **How would you deploy your implementation?**

Using CI/CD, deploy changes to each environment once at a time and test and monitor closely if the system is stable. Finally deploy changes to production.

- **If you had to implement the same application from scratch, what would you do differently?**

Nothing

- **The application aims at storing hundreds of thousands listings and millions of prices, and be accessed by millions
  of users every month. What should be anticipated and done to handle it?**

1. Scalability
- Horizontal Scalability: Ensure your application can handle an increasing number of users by adding more servers. Use a load balancer to distribute traffic evenly across servers.

- Database Scalability: Employ database sharding, partitioning, and replication to manage large datasets effectively.
Use read replicas to offload read-heavy operations.
Consider NoSQL databases like MongoDB, Cassandra, or DynamoDB for flexibility and performance with unstructured data.

2. Performance Optimization
- Caching: Use caching layers (e.g., Redis, Memcached) to store frequently accessed data such as prices and listings.
Implement Content Delivery Networks (CDNs) to cache and deliver static assets closer to users.
- Indexing: Optimize database queries with proper indexing to ensure fast retrieval of listings and prices.
- Asynchronous Processing: Offload time-intensive operations to background jobs using message queues like RabbitMQ or Apache Kafka.

3. Architecture
- Microservices Architecture: Break the application into smaller, independent services (e.g., user service, listing service, pricing service) to improve maintainability and scalability.
- API Gateway: Implement an API gateway to manage traffic efficiently and route requests to appropriate services.
- Event-Driven Architecture: Use event-driven communication (e.g., Kafka) for real-time updates like price changes.

4. Reliability
- Redundancy: Implement redundancy in your infrastructure to avoid single points of failure.
- Failover Systems: Use failover mechanisms for automatic recovery in case of hardware or software failures.
- Health Checks: Regularly monitor the health of servers and services.

5. Database Management
- Data Partitioning: Split large datasets into smaller chunks based on categories such as region, product type, or date.
- Archiving Old Data: Archive old or less frequently accessed data to improve performance of active datasets.

6. Traffic Management
- Rate Limiting and Throttling: Protect your application from abuse and overload by limiting the number of requests per user or IP address.
- Auto-Scaling: Use cloud platforms (e.g., AWS, Google Cloud, Azure) to automatically scale resources based on traffic.

7. Monitoring and Analytics
- Application Monitoring Tools: Use tools like New Relic, Datadog, or Prometheus to monitor application performance and identify bottlenecks.
- Logging: Implement centralized logging for debugging and troubleshooting.
- User Behavior Analytics: Track how users interact with the system to identify areas for optimization.

8. Security
- Data Protection: Encrypt sensitive data both in transit (e.g., HTTPS, TLS) and at rest (e.g., database encryption).
- Authentication & Authorization: Implement secure user authentication (e.g., OAuth2) and role-based access controls.
- DDoS Protection: Use services like Cloudflare or AWS Shield to protect against distributed denial-of-service attacks.

9. Testing and Load Simulation
- Stress Testing: Simulate peak loads to identify bottlenecks in your system.
- Load Balancing Tests: Test your load balancers to ensure even traffic distribution.
- Failover Tests: Test how the system behaves under failure conditions (e.g., database server down).

10. Cost Management
- Cloud Optimization: Use reserved instances, spot instances, and auto-scaling to optimize cloud infrastructure costs.
- Monitor Usage: Continuously monitor resource usage to avoid over-provisioning.

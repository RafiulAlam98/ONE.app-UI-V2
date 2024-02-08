

const AdminPage = () => {
  const { data, isLoading } = useGetUserProfileQuery();
  if (isLoading) {
    return <Loading />;
  }

  const route = `/admin/update-admin-profile`;
  const user = data?.data;
  console.log(user);
  return (
    <div>
      <div style={{ padding: "20px 32px" }}>
        <Breadcrumb
          items={[
            {
              title: (
                <Link href="/">
                  <HomeOutlined />
                </Link>
              ),
            },
            {
              title: "Admin",
            },
            {
              title: <Link href="/admin/view-profile">Account</Link>,
            },
          ]}
        />
      </div>
      {isLoading ? (
        <Spin
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        />
      ) : (
        <Profile key={user?._id} user={user} route={route} />
      )}
    </div>
  );
};

export default AdminPage;

AdminPage.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};

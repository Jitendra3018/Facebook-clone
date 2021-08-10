function HeaderIcon({ Icon, active }) {
    return (
        <div className="md:px-10 sm:h-14 md:hover:bg-gray-100 flex items-center rounded-xl cursor-pointer active:border-b-4 active:border-blue-500 group">
            <Icon
                className={`h-5 group-hover:text-blue-500 text-center sm:h-7 mx-auto text-gray-500 ${
                    active && "text-blue-500"
                }`}
            />
        </div>
    );
}

export default HeaderIcon;
